import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Select from 'react-select';

class MessageBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messageText: '',
			roomSelection: 'home'
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
	handleSelectChange(e) {
		this.setState({ roomSelection: e.target.value })
	}
	handleSubmit(e) {
		e.preventDefault();
		const { messageText, roomSelection } = this.state
		this.props.postMessage({ author: this.props.user, message: messageText, room: roomSelection })
		this.setState({ messageText: ''})
	}
	render() {
		return (
			<div  style={{...styles.barContainer, borderTop: 'none', width: '100%'}}>
				<form onSubmit={this.handleSubmit.bind(this)} style={styles.barContainer}>
					<input type='submit' style={{display: 'none'}}/>
					<input 
						value={this.state.messageText} 
						id='message'
						onChange={this.handleChange.bind(this)}
						placeholder='type a message...' 
						style={{border: 'none', ...styles.inputText}} 
						type='text'
					/>
					<select onChange={this.handleSelectChange.bind(this)} name="txtCountry">
						<option value='home'>Home</option>
						<option value='chitChat'>ChitChat</option>
						<option value='memes'>Memes</option>
					</select>
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

function mapStateToProps(state) {
	return { user: state.comments.user}
}

export default connect(mapStateToProps, actions)(MessageBar)
