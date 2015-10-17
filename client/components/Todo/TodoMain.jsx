import {Component} from 'react';
import ReactMixin from 'react-mixin';
import ReactMeteorData from 'react-meteor-data';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

import Tasks from 'models/Tasks';

@ReactMixin.decorate(ReactMeteorData)
export default class TodoMain extends Component {

	state = {
		hideCompleted: false
	}

	getMeteorData() {
		Meteor.subscribe('tasks');

		const taskFilter = {};

		if (this.state.hideCompleted) {
			taskFilter.checked = {$ne: true};
		}

		const tasks = Tasks.find(taskFilter, {sort: {createdAt: -1}}).fetch();
		const incompleteCount = Tasks.find({checked: {$ne: true}}).count();

		return {
			tasks,
			incompleteCount,
			user: Meteor.user()
		};
	}

	handleToggleHideCompleted = (e) => {
		this.setState({hideCompleted: e.target.checked});
	}

	render() {
		if ( ! this.data.tasks) return null;

		return (
				<div className="container">
					<TodoHeader
						incompleteCount={this.data.incompleteCount}
						hideCompleted={this.state.hideCompleted}
						toggleHideCompleted={this.handleToggleHideCompleted}
					/>
					<TodoList tasks={this.data.tasks} />
				</div>
		);
	}
}
