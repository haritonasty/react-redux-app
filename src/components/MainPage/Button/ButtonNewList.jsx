import React from 'react';

const ButtonNewList = ({ history }) => (
		<button className="todolist__button" onClick={() => {history.push('/create')}}>+</button>
);

export default ButtonNewList;