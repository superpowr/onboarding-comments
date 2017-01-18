import {
  UPDATE_INPUTTEXT, 
  FETCH_MESSAGES
} from '../actions/types';

const Application = (state=[], action) =>  {
  switch (action.type){
  case UPDATE_INPUTTEXT:
    return state;
  case FETCH_MESSAGES:
    return {...state, messageData: action.data.data };
  default:
      return state
  }
}
export default Application;
