import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducer/index';

const Todo = () => {
	const [ newTodo, setNewTodo ] = useState('');

	const [ state, dispatch ] = useReducer(todoReducer, initialState);

	const handleChanges = (e) => {
		setNewTodo(e.target.value);
	};

	const editTodo = (e) => {
		dispatch({ type: 'CHANGE_EDIT' });
	};

	const changeTodo = (e) => {
		dispatch({ type: 'CHANGE_TODO', payload: newTodo });
	};

	return (
		<div>
			{state.editing ? (
				<div>
					<input className="todo-input" type="text" name="newTodo" value={newTodo} onChange={handleChanges} />
					<button onClick={changeTodo}>Add Task</button>
				</div>
			) : (
				<h1>
					{state.title} <i className="todo-editing" onClick={editTodo} />
				</h1>
			)}
		</div>
	);
};

export default Todo;
