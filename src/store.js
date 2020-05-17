import { createStore, combineReducers } from "redux";
import SetInputReducer from "./Reducers/SetInputReducer";
import SetListeReducers from "./Reducers/SetListeReducers";

const Store=createStore(combineReducers({
    InputValue:SetInputReducer,
    ToDoList:SetListeReducers,
}))
export default Store;