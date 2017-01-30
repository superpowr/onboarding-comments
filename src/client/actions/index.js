import 'whatwg-fetch';
import * as constants from '../constants';

function isAuthReq() {
  return fetch('/users/isAuthenticated', { credentials: 'same-origin' });
}

function logoutReq() {
  return fetch('/users/logout', { credentials: 'same-origin' });
}

function signupReq(body) {
  return fetch('/users/signup', 
    { method: 'POST', 
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin', 
    }
  );
}

function loginReq(body) {
  return fetch('/users/login', 
    { method: 'POST', 
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin', 
    }
  );
}

function msgReq(body) {
  return fetch('/messages/create', 
    { method: 'POST', 
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin', 
    }
  );
}

function commentReq(body) {
  return fetch('/messages/comment', 
    { method: 'POST', 
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin', 
    }
  );
}

function setUser(user) {
  return {
    type: constants.SET_USER,
    user: user
  }
}

function setMsg(message) {
  return {
    type: constants.SET_MESSAGE,
    message: message
  }
}

function setComment(comment) {
  return {
    type: constants.SET_COMMENT,
    comment: comment
  }
}

function setUserAndMsgs(user, messages) {
  return {
    type: constants.SET_USER_AND_MESSAGES,
    user: user,
    messages: messages
  }
}

function setErrMessage(message) {
  return {
    type: constants.SET_ERR_MESSAGE,
    message: message
  }
}

function logoutComplete() {
  return {
    type: constants.LOGOUT_COMPLETE
  }
}

export function toggleAuth() {
  return {
    type: constants.TOGGLE_AUTH,
  } 
}

export function changeReply(messageId, reply) {
  return {
    type: constants.CHANGE_REPLY,
    messageId: messageId,
    reply: reply
  }
}

export function changeUsername(username) {
  return {
    type: constants.CHANGE_USERNAME,
    username: username
  }
}

export function changePassword(password) {
  return {
    type: constants.CHANGE_PASSWORD,
    password: password
  }
}

export function changeMsg(message) {
  return {
    type: constants.CHANGE_MESSAGE,
    message: message
  }
}

export function isAuthenticated() {
  return (dispatch) => {
    return isAuthReq().then((res) => {
        return res.json();
      }).then((body) => {
        dispatch(setUserAndMsgs(body.user, body.messages));
    });
  }
}

export function createMsg(message) {
  return (dispatch, getState) => {
    let state = getState();
    let body = { user: state.Application.user, message: state.Application.message };
    return msgReq(body).then((res) => {
        return res.json();
      }).then((body) => {
        dispatch(setMsg(body.message));
    });
  }
}

export function createComment(messageId, reply) {
  return (dispatch, getState) => {
    let state = getState();
    let body = { user: state.Application.user, messageId: messageId, reply: reply };
    return commentReq(body).then((res) => {
        return res.json();
      }).then((body) => {
        dispatch(setComment(body.comment));
    });
  }
}

export function login(opts) {
  return (dispatch, getState) => {
    let state = getState();
    let body = { 
      username: state.Application.username, 
      password: state.Application.password
    };
    return loginReq(body).then((res) => {
        return res.json();
      }).then((body) => {
        if (body.errMessage) {
          dispatch(setErrMessage(body.errMessage));
        } else {
        dispatch(setUser(body.user));
      }
    }).catch((err) => {
      console.log('err', err)
    });
  }
}

export function signup(opts) {
  return (dispatch, getState) => {
    let state = getState();
    let body = { 
      username: state.Application.username, 
      password: state.Application.password
    };
    return signupReq(body).then((res) => {
        return res.json();
      }).then((body) => {
        if (body.errMessage) {
          dispatch(setErrMessage(body.errMessage));
        } else {
        dispatch(setUser(body.user));
      }
    })
  }
}

export function logout() {
  return (dispatch) => {
    return logoutReq().then((res) => {
        return res.json();
      }).then((body) => {
        dispatch(logoutComplete());
    });
  }
}