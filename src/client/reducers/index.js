import { combineReducers } from 'redux';
import commentsReducer from './Application';
const reducer = combineReducers({
	comments: commentsReducer
})

export default reducer