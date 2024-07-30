import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from 'redux-thunk'
import { restaurantReducer } from "./reducer/restaurantReducer";

const reducer = combineReducers({
    restaurants: restaurantReducer
})

// To Connect DEVTOOL IN BROWSER 
const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middelware = [thunk];

const store = createStore(
    reducer,
    composeenhancers(applyMiddleware(...middelware))
);

export default store;