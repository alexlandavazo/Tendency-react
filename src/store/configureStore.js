import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {ordersReducer} from '../reducers/orders';

export const rootReducer = combineReducers({
  orders: ordersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
