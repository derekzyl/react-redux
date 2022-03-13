import {createStore, applyMiddleware } from 'redux';
import { combine } from './root-reducer';
// import cakeReducer from './cakes/cake-reducer';
import logger from 'redux-logger';

// import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools({
//   // Specify name here, actionsBlacklist, actionsCreators and other options if needed
// });
const store = createStore(combine, /* preloadedState, */ composeWithDevTools(
    applyMiddleware(logger)
  // other store enhancers if any
));





// const store = createStore(combine, )
 
export default store