import React from 'react';

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

const TodoTaskForm = ({text, value}) => {
	let input;
	// function handleChange(e) {
	// 	onClick(e.target.value);
	// }
	return (
	<li>
		<input type="text"  className="create-todo__text"  name="todo"
		       defaultValue={text}
			// value={value}
			// onChange={this.handleChange}

		/>
	</li>
)};


export default TodoTaskForm;