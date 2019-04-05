import {combineReducers} from 'redux';
import {default as requests} from './requests/reducers';
import {default as mining} from './mining/reducers';

export default combineReducers(
  {
    requests,
    mining
  }
)