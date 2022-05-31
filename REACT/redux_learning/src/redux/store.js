import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import toDoListReducer from "./reducers/toDoListReducer";

const root_reducer = combineReducers({ counterReducer, toDoListReducer });

const store = createStore(root_reducer);
console.log(store.getState());

export default store;
