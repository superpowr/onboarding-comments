import { FETCH_MESSAGES } from './types';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';

export const fetchComments = () => {
	return function(dispatch) {
		axios.get('/messages/posts')
		.then((data) => {
			dispatch({ type: FETCH_MESSAGES, data })
		})
	}
}