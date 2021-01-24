import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import getRootReducer from '../reducers';

export default createStore(
    getRootReducer(),
    applyMiddleware(thunk)
);