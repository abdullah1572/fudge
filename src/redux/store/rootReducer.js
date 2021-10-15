import { combineReducers } from "redux";
import { CollectionReducer } from "../Reducers/Index";

const rootReducer = combineReducers({
    CollectionReducer:CollectionReducer,
 
});

export default rootReducer;