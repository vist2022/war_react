import {SET_NAME_ACTION} from "../actions/nameAction";

const initialName = '';
function nameReducer(name = initialName,action)
{
	switch (action.type)
	{
		case SET_NAME_ACTION:
			return action.payload;
		default:
			return name;
	}
}

export default nameReducer;