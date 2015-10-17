import {Component, PropTypes} from 'react';
import BlazeToReact from 'blaze-to-react';

const LoginButtons = BlazeToReact('loginButtons');

export default class TodoHeader extends Component {
	static propTypes = {
		hideCompleted: PropTypes.bool,
		toggleHideCompleted: PropTypes.func.isRequired,
		incompleteCount: PropTypes.number.isRequired
	}

	handleSubmit = (e) => {
		// Prevent default browser form submit
		e.preventDefault();

		// Get value from form element
		const text = e.target.text.value;

		// Insert a task into the collection
		Meteor.call('addTask', text);

		// Clear form
		e.target.text.value = '';
	}

	render() {
		let form = null;

		if (Meteor.userId()) {
			form = (
				<form className="new-task" onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="text"
						placeholder="Type to add new tasks"
					/>
				</form>
			);
		}

		return (
			<header>
				<h1>
					<img src={require('public/check.png')} />
					Todo List ({this.props.incompleteCount})
				</h1>

				<label className="hide-completed">
					<input
						type="checkbox"
						checked={this.props.hideCompleted}
						onChange={this.props.toggleHideCompleted}
					/>
					Hide Completed Tasks
				</label>

				<LoginButtons />

				{form}
			</header>
		);
	}
}
