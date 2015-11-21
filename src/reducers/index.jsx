import objectAssign from "object-assign";
import { combineReducers } from "redux";

import * as list from "./post/list";
import * as ctnt from "./post/ctnt";

const reducers = objectAssign(
	list, 
	ctnt
);

export default combineReducers(reducers);