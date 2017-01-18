import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MessageBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authorText: '',
			messageText: ''
		}
	}
	handleChange(e) {
		if(e.target.id === 'message') {
			this.setState({
				messageText: e.target.value,
			})
		} else {
			this.setState({
				authorText: e.target.value
			})
		}
	}
	handleSubmit(e) {
		console.log('sasdfasdf')
		e.preventDefault();
		const { authorText, messageText } = this.state
		this.props.postMessage({ author: authorText, message: messageText})
		this.setState({ messageText: ''})
	}
	render() {
		return (
			<div  style={{...styles.barContainer, borderTop: 'none', width: '100%'}}>
				<form onSubmit={this.handleSubmit.bind(this)} style={styles.barContainer}>
					<input 
						value={this.state.authorText} 
						id='author'
						onChange={this.handleChange.bind(this)}
						placeholder='type your name...' 
						style={{border: 'none', ...styles.inputText}} 
						type='text'
					/>
					<label style={styles.breaker}></label>
					<input type='submit' style={{display: 'none'}}/>
					<input 
						value={this.state.messageText} 
						id='message'
						onChange={this.handleChange.bind(this)}
						placeholder='type a message...' 
						style={{border: 'none', ...styles.inputText}} 
						type='text'
					/>
				</form>
			</div>
		)
	}
}


const styles = {
	barContainer: {
		marginLeft: '10px',
		width: '55%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderTop: '1px solid #5287DF',
	},
	inputText: {
		width: '80%',
		padding: '12px',
		fontSize: '16px'
	},
	breaker: {
		border: '.5px solid #5287DF',
		height: '15px',
		margin: '0 10px 0 10px'
	}
}
export default connect(null, actions)(MessageBar)
