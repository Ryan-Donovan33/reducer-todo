export const initialState = {
	todo: 'List of todo items',
	editing: false
};

export const todoReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_TASK':
			return { ...state, todo: action.payload, editing: false };
		default:
			return state;
	}
};
