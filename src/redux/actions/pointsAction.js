
export const SET_POINTS_ACTION = 'SET_POINTS_ACTION';
export const RESET_POINT_ACTION='RESET_POINT_ACTION';


export const setPointsAction = (comp,player)=>
	({
		type:SET_POINTS_ACTION,
		payload: {comp,player }
	})

export const resetPointsAction = (reset)=>
	({
		type:RESET_POINT_ACTION,
		payload: reset,
	})
