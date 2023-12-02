import {RESET_POINT_ACTION, SET_POINTS_ACTION} from "../actions/pointsAction";

const initialPoints = {computer: 0, player: 0};

function pointsReducer(points=initialPoints, action)
{
	switch (action.type)
	{
		case SET_POINTS_ACTION:
			const comp = action.payload.comp;
			const player = action.payload.player;
			if (comp > player)
				return {...points, computer:points.computer+1};
			else if (player>comp)
				return {...points, player:points.player+1};
			return points;
		case RESET_POINT_ACTION:
			return {...points, player:0, computer: 0};
		default:
			return points;
	}
}

export default pointsReducer;