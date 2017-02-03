import 'whatwg-fetch';
import cookie from 'react-cookie';

export function getComments() {
  return function(dispatch) {

    // Make a call to GET /comments
    return fetch('/comments')
    .then(function(res) {
      return res.json();
    })
    .then(function(body) {
      // With the body of the response, set the state to include all comments
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
  return { 
    type: 'SET_COMMENTS', 
    comments: comments 
  }
}

export function newComment(text) {
  return function(dispatch, getState) {

    // Get the current user, and make the body of the request
    var email = cookie.load('PowrCommentsUserEmail')
    var body = { text: text, email: email };

    // Make a call to POST /comments, with the body object we made
    return fetch('/comments', { 
      method: 'POST', 
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'  
    })
    .then(function(res) {
      return res.json();
    })
    // Set the state to include the new comment, included in the body of the response
    .then(function(body) {
      dispatch(addComment(body.comment));
    });
  }
}

export function getUser() {
  return function(dispatch) {

    // Attempt to load a cookie from the browser
    var email = cookie.load('PowrCommentsUserEmail')
    // If it exists, set the user to the user specified by the cookie (not very secure)
    if (email) { dispatch(setUser(email)) }
    // Otherwise, the user remains null in state, and the login form is displayed
  }
}

export function login(email) {
  return function(dispatch) {

    // Set a new cookie with expiry 10 minutes from now
    // Cookie includes the provided email, which will be used to identify the user from now on
    var expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + 10);
    cookie.save('PowrCommentsUserEmail', email, { path: '/', expires: expiry });

    // Make a body for the upcoming request with the provided email
    var body = { email: email };

    // Find existing user with the provided email or create a new user
    return fetch('/user', { 
      method: 'POST', 
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'  
    })
    .then(function(res) {
      return res.json();
    })
    .then(function(body) {
      // Set the state to include the current user
      dispatch(setUser(email));
    });
  }
}

export function logout() {

  // Remove the comment that indicates user session
  cookie.remove('PowrCommentsUserEmail', { path: '/' });

  // dispatch the action to remove user from state
  return function(dispatch) {
    dispatch(removeUser());
  }
}

function setUser(email) {
  return { type: 'SET_USER', email: email }
}

function removeUser(email) {
  return { type: 'REMOVE_USER' }
}