import React from 'react';


export default class extends React.Component {


	render() {
		return (
			<div>
				<h3>New component</h3>
				<p>{ this.props.text }</p>
			</div>
		);
	}
}
