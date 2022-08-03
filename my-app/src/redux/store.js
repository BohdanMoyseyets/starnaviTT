import { combineReducers, createStore } from "redux";
import squaresReducer from "./squares-reducer";
import formReducer from "./form-reducer";


let reducers = combineReducers({
  squares: squaresReducer,
  form: formReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;