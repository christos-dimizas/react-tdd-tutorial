import bitCoinReducer from './bitcoin';
import {FETCH_BITCOIN} from '../actions/constants';

describe('bitCoinReducer', () => {
    const bitCoinData = {bpi: 'bitCoin price index'};

    it('fetches and sets the bitCoin data', () => {
        expect(bitCoinReducer({}, {type: FETCH_BITCOIN, bitCoin: bitCoinData})).toEqual(bitCoinData);
    });
});