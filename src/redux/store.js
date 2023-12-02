import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";


export const store = createStore(rootReducer, applyMiddleware(thunk,logger));