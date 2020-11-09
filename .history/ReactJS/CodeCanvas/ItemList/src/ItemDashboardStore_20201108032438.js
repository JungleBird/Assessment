import {createStore, combineReducers, applyMiddleware} from "redux";
import itemReducer from "./reducers/itemReducer"

export default createStore(
    combineReducers({...itemReducer}), 
    {}
);