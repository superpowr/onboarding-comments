import 'whatwg-fetch';

export function getComments() {
  return function(dispatch) {
    // console.log('function(dispatch)')
    return fetch('/comments')
                .then(function(res) {
                  return res.json();
                })
                .then(function(body) {
                  dispatch(setComments(body.comments))
                });
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
                .then(function() {
                  console.log('sending dispatch to get comments')
                  dispatch(getComments())
                });
  }
}