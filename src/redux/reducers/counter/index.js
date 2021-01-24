import ACTIONS from '../../../resources/Actions';

const initialState = {
    count: 0,
}

const counterReducer = (state=initialState, action) => {
    switch(action.type){
        case ACTIONS.INCREMENT:
            return {count: state.count + 1}
        case ACTIONS.DECREMENT:
            return {count: state.count - 1}
        default: 
            return state;
    }
}

export default counterReducer;