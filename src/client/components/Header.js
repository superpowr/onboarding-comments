import React, { Component } from 'react';

class Header extends Component {
	render() {
		return(
			<div id='header' className='header' style={styles.header}>
				<div style={{...styles.titleContainer, flexDirection: 'row'}} >
					<div style={styles.titleContainer}>
						<div style={styles.titleHeader}>Comments</div>
						<div style={styles.titleSubHeader}>powered by POWr.io</div>
					</div>
					<img style={{height: '50px'}} src='http://bit.ly/2iwfKNl'/>
				</div>
			</div>
		)
	}
}

export default Header;

const styles = {
	header: {
		height: '100px',
		backgroundColor: '#5287DF',
		margin: '-9px -9px 0 -9px',
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	},
	titleHeader: {
		color: 'white',
		fontSize: '40px'
	},
	titleSubHeader: {
		color: 'white',
		fontSize: '15px'
	}
}