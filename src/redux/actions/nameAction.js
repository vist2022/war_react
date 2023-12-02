export const SET_NAME_ACTION = 'SET_NAME_ACTION' ;

export const setNameAction = name =>
	({
		type : SET_NAME_ACTION,
		payload: name
	})