import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import * as actions from '../actions';
import dateFormat from 'dateformat';
import ReactDOM from 'react-dom';

class MessageList extends Component {
	constructor(props) {
		super(props)
	}
	scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({behavior: "smooth"});
	}
	componentDidMount() {
		this.scrollToBottom();
	}
	componentDidUpdate() {
		this.scrollToBottom();
	}
	renderMessageList() {
		if(Array.isArray(this.props.messageData) && this.props.messageData.length > 0) {
			console.log('renderMessageList', this.props.messageData)
			return this.props.messageData.map((message, i) => {
				const { text, author_name, createdAt } = message;
				var messageDate = dateFormat(createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT");
				return (
					<div style={styles.messageContainer} key={i}>
						<div style={{ backgroundColor: 'light-gray', display: 'flex', flexDirection: 'column', width: '100%'}}>
							<div style={styles.textContainer}>
								{text}
							</div>
							<div style={styles.infoContainer}>
								<div>From: {author_name}</div>
								<div>{messageDate}</div>
							</div>
						</div>
					</div>
				)
			})
		}
		return '';
	}
	componentWillReceiveProps(nextProps) {
		this.renderMessageList();
	}
	render() {
		return (	
			<div style={styles.container}>
				<div style={styles.listContainer}>
					{this.renderMessageList()}
					<div style={ {float:"left", clear: "both"} }
						ref={(el) => { this.messagesEnd = el; }}/>
				</div>
			</div>
		)
	}
}

const mainFlex = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}
const styles = {

	container: {
		...mainFlex,
		width: '100%',
		flexDirection: 'column',
		padding: '20px' 
	},
	listContainer: {
		display: 'flex', 
		flexDirection: 'column', 
		alignItems: 'center',
		height: '600px', 
		width: '70%', 
		overflow: 'auto'
	},
	messageContainer: {
		padding: '30px',
		margin: '10px 0 10px 0', 
		...mainFlex,
		backgroundColor: '#E3F2FD',
		boxShadow: '1px 1px 1px #E3F2FD .6',
		width: '60%',
		borderRadius: '3px'
	},
	textContainer:{
		width: '100%', 
		display: 'flex', 
		wordBreak: 'break-all', 
		wordWrap: 'breakWord',
		fontSize: '14px'
	},
	infoContainer: {
		fontSize: '12px', 
		display: 'flex', 
		flexDirection: 'row', 
		justifyContent: 'space-around',
		wordBreak: 'break-all', 
		wordWrap: 'breakWord'
	}
}

function mapStateToProps(state) {
	return { messageData: state.comments.messageData, user: state.comments.user}
}

export default connect(mapStateToProps, actions)(MessageList);