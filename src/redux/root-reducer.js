import {combineReducers} from 'redux'
import cakeReducer from './cakes/cake-reducer';
import iceReducer from './icecream/icecream-reducer';

  export const combine = combineReducers(
      {cake:cakeReducer, ice:iceReducer
    })
