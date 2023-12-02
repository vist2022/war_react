import {combineReducers} from "redux";
import nameReducer from "./nameReducer";
import pointsReducer from "./pointsReducer";
import cardsReducer from "./cardsReducer";

export const rootReducer = combineReducers(
	{
		name:nameReducer,
		points:pointsReducer,
		cards:cardsReducer,
	}
)