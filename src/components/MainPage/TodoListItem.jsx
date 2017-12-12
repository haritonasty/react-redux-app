import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({title}) => (
	<li>{title}</li>
);

TodoListItem.propTypes = {
	title: PropTypes.string.isRequired,
};

export default TodoListItem;