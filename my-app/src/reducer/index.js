export const initialState = {
	item: 'Learn about reducers',
	completed: false,
	id: 3892987589
};

export const todoList = [
	{
		item: '',
		completed: false,
		id: ''
	}
];

export const todoReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_TODO':
			return { ...state, todo: action.payload, completed: false, id: newDate() };
		case 'CHANGE_EDIT':
			return { ...state, completed: !item.completed };
		default:
			return state;
	}
};
