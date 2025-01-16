import { createStore, combineReducers } from "redux";
import carReducer from "./reducers/carReducer.tsx";

const rootReducer = combineReducers({
  car: carReducer, // This connects the carReducer to the state
});

const store = createStore(rootReducer);
export default store;
