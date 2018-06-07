import {combineReducers} from 'redux';
import balance from './balance';
import bitCoin from './bitcoin';

export default combineReducers({balance, bitCoin});