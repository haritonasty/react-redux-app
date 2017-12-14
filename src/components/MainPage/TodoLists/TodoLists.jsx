import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TodoListItem from './TodoListItem';
import Masonry from 'masonry-layout';

const mapStateToProps = (state) => ({
	todolists: state.todolists
});


class TodoLists extends React.Component {
	constructor(props) {
		super(props);
	}



	componentDidMount(){
		new Masonry(".todolists", {
			itemSelector: ".todolists__item",
			fitWidth: true
		});
	}

	render() {
		return (
			<ul className="todolists" >
				{this.props.todolists.map(todolist =>
					<TodoListItem
						history={this.props.history}
						key={todolist.id}
						{...todolist}
					/>
				)}
			</ul>
		);
	}


}

// const TodoLists = ({ todolists, history}) => {
// 	return (
// 			<ul className="todolists" data-masonry='{ "itemSelector": ".todolists__item", "fitWidth": true}'>
// 				{todolists.map(todolist =>
// 					<TodoListItem
// 						history={history}
// 						key={todolist.id}
// 						{...todolist}
// 					/>
// 				)}
// 			</ul>
// 	);
// };

TodoLists.propTypes = {
	todolists: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired).isRequired,
};


export default connect(mapStateToProps)(TodoLists);