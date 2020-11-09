import {createStore, combineReducers} from "redux";
import itemReducer from "./reducers/itemReducer"

export default createStore(
    {items: itemReducer}, 
    {}
);