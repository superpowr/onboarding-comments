import { FETCH_MESSAGES } from './types';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';

export const postMessage = (data) => {
	return function(dispatch) {
		axios.post('/messages/posts', {	...data	})
		.then((data) => {
			dispatch({type: FETCH_MESSAGES, data})
		})
	}
}
