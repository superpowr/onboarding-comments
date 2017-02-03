import 'whatwg-fetch';

export function getComments() {
  return function(dispatch) {
    return fetch('/comments')
                .then(function(res) {
                  return res.json();
                })
                .then(function(body) {
                  dispatch(setComments(body.comments))
                });
  }
}

function addComment(comment) {
  return {
    type: 'ADD_COMMENT',
    comment: comment
  }
}

function setComments(comments) {
  return { type: 'SET_COMMENTS', comments: comments }
}

export function newComment(text) {
  return function(dispatch, getState) {

    // Get the current state, set body to a Comment object literal with given text
    var state = getState();
    var body = { text: text };

    return fetch('/comments', { 
                  method: 'POST', 
                  body: JSON.stringify(body),
                  headers: { 'Content-Type': 'application/json' },
                  credentials: 'same-origin'  
                })
                .then(function(res) {
                  return res.json();
                })
                .then(function(body) {
                  dispatch(addComment(text));
                });
  }
}

export function getUser() {
  return function(dispatch) {
    return fetch('/user')
                .then(function(res) {
                  return res.json();
                })
                .then(function(body) {
                  console.log('getUser response body', body)
                  dispatch(setUser(body.email))
                });
  }  
}

function setUser(email) {
  return { type: 'SET_USER', email: email }
}