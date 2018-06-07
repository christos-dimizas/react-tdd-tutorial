import {FETCH_BITCOIN} from '../actions/constants';

const bitCoin = (state = {}, action) => {
    switch(action.type) {
        case FETCH_BITCOIN:
            return action.bitCoin;
        default:
            return state;
    }
};

export default bitCoin;