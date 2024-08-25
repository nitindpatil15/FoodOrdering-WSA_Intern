import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from 'redux-thunk'
import { restaurantReducer } from "./reducer/restaurantReducer";
import { menuReducer } from "./reducer/menuReducer";
import {authReducer, forgotPasswordReducer, userReducer} from './reducer/userReducer'
import { cartReducer } from "./reducer/cartReducer";
import { myOrderReducer, newOrderReducer, orderDetailReducer } from "./reducer/orderReducer";


const reducer = combineReducers({
    restaurants: restaurantReducer,
    menus:menuReducer,
    auth: authReducer,
    update:userReducer,
    forgetPassword:forgotPasswordReducer,
    cart:cartReducer,
    newOrder:newOrderReducer,
    myOrders:myOrderReducer,
    orderDetails:orderDetailReducer,
})

// To Connect DEVTOOL IN BROWSER 
const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middelware = [thunk];

const store = createStore(
    reducer,
    composeenhancers(applyMiddleware(...middelware))
);

export default store;