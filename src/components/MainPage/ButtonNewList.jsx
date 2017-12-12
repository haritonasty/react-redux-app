import React from 'react';

const ButtonNewList = ({ history }) => (
	<section className="new-todolist">
		<button className="new-todolist__button" onClick={() => {history.push('/create')}}>+</button>
	</section>
);

export default ButtonNewList;