import React from 'react';
import { connect } from 'react-redux';
import { updateTodoTask } from '../../actions';

// class TodoTaskForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
//
// 	handleUpdate(){
// 		this.props.getData(
// 			this.props.key, {
// 			input: input
// 			},
// 		)
//
//
// 	}
//
//
// 	render(){
// 		let input;
// 		// function handleChange(e) {
// 		// 	onClick(e.target.value);
// 		// }
// 		return (
// 			<li>
// 				<input ref={node => { input = node; }} type="text"  className="create-todo__text"  name="todo"
// 				       defaultValue={this.props.text}
// 					// value={value}
// 					   onChange={this.handleUpdate}
//
// 				/>
// 			</li>
// 		)
// 	}
// }

const TodoTaskForm = ({text, id, dispatch}) => {
	let input;
	// function handleChange(e) {
	// 	onClick(e.target.value);
	// }
	return (
	<li>
		<input autoFocus type="text"  className="create-todo__text"  name="todo"
		       defaultValue={text}
			// value={value}
			   onChange={e => {
				   dispatch(updateTodoTask(id, e.target.value));
			   }}

		/>
	</li>
)};


export default connect()(TodoTaskForm);