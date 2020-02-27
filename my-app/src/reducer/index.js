export const initialState = {
	todo: 'List of todo items',
	editing: false
};

export const todoReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_TODO':
			return { ...state, todo: action.payload, editing: false };
		case 'CHANGE_EDIT':
			return { ...state, editing: true };
		default:
			return state;
	}
};
