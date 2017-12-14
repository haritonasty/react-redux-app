import React from 'react';
import imgError from '../../img/error-404.svg';

const NotFound = () => (
	<div className="todolists__empty">
		<img src={imgError} alt="emptyLists"/>
	</div>
);

export default NotFound;