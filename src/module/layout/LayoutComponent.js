import React from 'react';

export default class extends React.Component{
	render(){
		const {nav, children} = this.props;
		return (
			<div id='main_box'>
				<div>
					{ children }
				</div>
			</div>
		);
	}
};

