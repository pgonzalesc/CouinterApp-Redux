import {combineReducers} from 'redux';
import counterReducer from './counter';

const getRootReducer = () => {
    return combineReducers({
        counterReducer,
    })
}

export default getRootReducer;