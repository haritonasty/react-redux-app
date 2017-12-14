import React from 'react';
import PropTypes from 'prop-types';

const ButtonNewList = ({ history }) => (
		<button className="todolist__button" onClick={() => {history.push('/create')}}>+</button>
);

ButtonNewList.propTypes = {
	history: PropTypes.object.isRequired,
};

export default ButtonNewList;