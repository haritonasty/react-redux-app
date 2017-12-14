import React from 'react';
import imgHello from '../../img/hello.svg';



const EmptyLists = () =>(
	<div className="todolists__empty">
		<img src={imgHello} alt="emptyLists"/>
		<span className="todolists__empty_text">Чтобы создать TODOLIST, нажми на оранжевую кнопку (:</span>
	</div>
);

export default EmptyLists;