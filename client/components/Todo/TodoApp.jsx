import {Component, PropTypes} from 'react';

export default class TodoApp extends Component {
	static propTypes = {
		children: PropTypes.any.isRequired
	}

	componentWillMount() {
		require('./TodoApp.import.css');
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
