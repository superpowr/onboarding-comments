import { FETCH_MESSAGES, FETCH_USER } from './types';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';

export const postMessage = ({author, message, room}) => {
	return function(dispatch) {
		axios.post('/messages/posts', {	author, message, room	})
		.then((data) => {
			console.log(data)
			dispatch({type: FETCH_MESSAGES, data})
		})
	}
}

export const login = ({email, password}) => {
	return function(dispatch) {
		axios.post('/login', { email, password })
		.then((data) => {
			dispatch({ type: FETCH_USER ,data})
		})
	}
}

export const signup = ({email, password}) => {
	return function(dispatch) {
		axios.post('/signup', { email, password })
		.then((data) => {
			dispatch({ type: FETCH_USER ,data})
		})
	}
}