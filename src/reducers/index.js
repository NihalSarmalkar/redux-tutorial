// root reducer will contain all other reducers

import changeTheNumber from "./reducer";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    changeTheNumber
});

export default rootReducer;
