import { combineReducers, createStore } from "redux";
import squaresReducer from "./squares-reducer";


let reducers = combineReducers({
  squares: squaresReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;