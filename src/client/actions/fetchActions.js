import { FETCH_MESSAGES, FETCH_USER } from './types';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';

export const fetchComments = () => {
	return function(dispatch) {
		axios.get('/messages/posts')
		.then((data) => {
			if(data === 'fail') {
				dispatch({ type: FETCH_USER, undefined })
			}
			dispatch({ type: FETCH_MESSAGES, data })
		})
	}
}