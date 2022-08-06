import { combineReducers } from 'redux';
import { bankReducer } from './bankReducer';

export const reducer = combineReducers({
  bank: bankReducer,
});
