import ACTIONS from '../../../resources/Actions';

export const increment = count => ({
        type: ACTIONS.INCREMENT,
        payload: count
})

export const decrement = count => ({
        type: ACTIONS.DECREMENT,
        payload: count
})