import {
  FETCH_USER, 
  FETCH_MESSAGES
} from '../actions/types';

const Application = (state=[], action) =>  {
  switch (action.type){
  case FETCH_USER:
    return {...state, user: action.data.data}
  case FETCH_MESSAGES:
    return {...state, messageData: action.data.data };
  default:
      return state
  }
}
export default Application;
