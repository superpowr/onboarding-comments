import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthenticationModal extends Component {
	constructor() {
		super();
		this.state = {
			type: 'Login',
			email: '',
			password: '',
			isOpen: true
		};
	}
	handleChange(e) {
		if(e.target.id === 'email') {
			this.setState({
				email: e.target.value,
			})
		} else {
			this.setState({
				password: e.target.value
			})
		}
	}
	handleSubmit(e){
		e.preventDefault();
		const { email, password, type } = this.state;
		if( type === 'Login') {
			this.props.login({ email, password })
		} else {
			this.props.signup({ email, password })
		}
		this.setState({ email: '', password: ''})
	}
	componentWillReceiveProps(newProps){
		console.log('newpropsnewprops', newProps)
		if(newProps.user) {
			if(!newProps.messageData) {
				this.props.fetchComments('home') 
			}
			this.setState({
				isOpen: false
			})
		}
	}
	render() {
		var isOpen = this.props.user !== undefined ? false : true;
		return (
			<Modal
				isOpen={this.state.isOpen}
				closeTimeoutMS={10}
				style={styles.modalStyle}
				contentLabel="Modal"
			>
				<h1 style={{cursor: 'pointer'}} onClick={() => { 
					var newType = this.state.type === 'Login' ? 'Signup' : 'Login';
					this.setState({ type: newType})
				}}>{this.state.type}</h1>
				<form onSubmit={this.handleSubmit.bind(this)} style={{height: '60%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column'}}>
					<div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
						<label style={{marginTop: '20px'}}>Email</label>
						<input 
							style={styles.inputText}
							value={this.state.email} 
							id='email'
							onChange={this.handleChange.bind(this)}
							placeholder='type your email...' 
							type='text'
						/>
					</div>
					<input type='submit' style={{display: 'none'}}/>
					<div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
						<label style={{marginTop: '20px'}}>Password</label>
						<input 
							style={styles.inputText}
							value={this.state.password} 
							id='password'
							onChange={this.handleChange.bind(this)}
							placeholder='type a password...' 
							type='text'
						/>
					</div>
					<input  style={{height: '50px', width: '120px'}} type='submit'/>
				</form>
			</Modal>
		)
	}
}

const styles = {
	inputText: {
		width: '70%',
		padding: '12px',
		fontSize: '16px',
		border: 'none',
		borderBottom: '1px solid #5287DF'
	},
  modalStyle: {
		overlay : {
			position          : 'fixed',
			top               : 0,
			left              : 0,
			right             : 0,
			bottom            : 0,
			backgroundColor   : '#5287DF',
			opacity           : '.7'
		},
		content : {
			position                   : 'absolute',
			top                        : '17%',
			left                       : '32%',
			right                      : '32%',
			bottom                     : '17%',
			border                     : '1px solid #ccc',
			background                 : '#fff',
			overflow                   : 'auto',
			WebkitOverflowScrolling    : 'touch',
			borderRadius               : '4px',
			outline                    : 'none',
			padding                    : '20px'
	
		}
	}
}

function mapStateToProps(state) {
	return { messageData: state.comments.messageData, user: state.comments.user}
}
export default connect(mapStateToProps, actions)(AuthenticationModal)
