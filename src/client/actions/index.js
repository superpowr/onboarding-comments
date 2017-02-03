import 'whatwg-fetch';
import cookie from 'react-cookie';

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

  // The Header component goes to getUser on componentDidMount
  // It should then come here, and check a for a cookie in the browser? (sessions)
  // If there is a cookie, it retrieves the email from the cookie and calls dispatch(setUser(email))
  // If there is no cookie, it does nothing... thereby leaving user at null, which causes the LoginForm to render

  return function(dispatch) {
    var email = cookie.load('PowrCommentsUserEmail')
    console.log(email)
    if (email) {
      dispatch(setUser(email))
    }
  }
}

export function login(email) {

  // This corresponds to a post /user route on the server side
  // The post route will check if a user exists with the provided email
  // if it does, the route will return that user. 
  // Then back here, call dispatch(setUser(body.email)) to set the user to the current user
  // Also, put a cookie in the user's browser
  // If a user with the provided email does NOT exist, create it
  // Again, dispatch the setUser action and put a cookie in the browser

  return function(dispatch) {

    // Set a new cookie with expiry 10 minutes from now
    var expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + 10);
    cookie.save('PowrCommentsUserEmail', email, { path: '/', expires: expiry });

    // Make a body for the upcoming request
    var body = { email: email };

    // Find existing user or create a new user
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
  console.log('removeUser')
  return { type: 'REMOVE_USER' }
}