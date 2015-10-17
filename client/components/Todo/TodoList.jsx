import {Component, PropTypes} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
	static propTypes = {
		tasks: PropTypes.array.isRequired
	}

	render() {
		const tasks = this.props.tasks.map((task) => {
			return <TodoItem key={task._id} task={task} />;
		});

		return (
			<ul>
				{tasks}
			</ul>
		);
	}
}
