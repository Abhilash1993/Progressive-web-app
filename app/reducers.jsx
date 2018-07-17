import { combineReducers } from 'redux';
import landing from './landing/landing_reducer'

const rootReducers = combineReducers({
  landing
});

module.exports = rootReducers;
