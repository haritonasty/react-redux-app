import { connect } from 'react-redux';
import TodoLists from './TodoLists';


const mapStateToProps = (state) => ({
	todolists: state.todolists
});


const TodoListsContainer = connect(mapStateToProps)(TodoLists);

export default TodoListsContainer;
