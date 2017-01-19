import { FETCH_MESSAGES, FETCH_USER } from './types';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';

export const fetchComments = (room) => {
	return function(dispatch) {
		axios.post('/messages/room',{ room })
		.then((data) => {
			if(data === 'fail') {
				console.log('failedfailedfalied')
				dispatch({ type: FETCH_USER, undefined })
			} else {
				console.log('asdfajskdfkjlasdjklfhaskldj', data)
				dispatch({ type: FETCH_MESSAGES, data })
			}
		})
	}
}