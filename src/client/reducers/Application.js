import * as constants from '../constants';

const initialState = {
  user: null,
  message: '',
  messages: [],
  isLogin: true,
  errMessage: ''
};

const Application = (state=initialState, action) =>  {
  switch (action.type){
  case constants.TOGGLE_AUTH:
    return {
      ...state,
      isLogin: !state.isLogin
    }
  case constants.CHANGE_USERNAME:
    return {
      ...state,
      username: action.username
    }  
  case constants.CHANGE_PASSWORD:
    return {
      ...state,
      password: action.password
    }  
  case constants.CHANGE_MESSAGE:
    return {
      ...state,
      message: action.message
    }
  case constants.SET_USER:
    return {
      ...state,
      user: action.user
    }
  case constants.SET_MESSAGE:
    action.message.user = state.user;
    return {
      ...state,
      messages: [
        ...state.messages,
        action.message
      ]
    }
  case constants.SET_USER_AND_MESSAGES:
    return {
      ...state,
      user: action.user,
      messages: action.messages.map(transformMsg).filter(dedupe)
    }  
  case constants.LOGOUT_COMPLETE:
    return {
      ...state,
      user: null
    } 
  case constants.CHANGE_REPLY:
    return {
      ...state,
    }  
  case constants.SET_COMMENT:
    return {
      ...state,
      messages: state.messages.map(addComment(action.comment))
    }  
  case constants.SET_ERR_MESSAGE:
    return {
      ...state,
      errMessage: action.message
    }
  default:
      return state
  }
}

function addComment(comment) {
  return (message) => {
    if (comment.MessageId === message.id) {
      message.comments = Array.isArray(message.comments) ? message.comments : [];
      message.comments.push(comment);
    }
    return message;
  }
}

function transformMsg(message) {
  message.user = message.User;
  message.comments = message.Comments;
  delete message.User;
  delete message.Comments;
  return message;
}

// removes messages that are comments of messages at root of data structure
function dedupe(message) {
  return message.MessageId === null;
}

export default Application;
