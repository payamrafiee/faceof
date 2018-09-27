import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const middlewares = [thunk, createLogger()];

export default createStore(rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares)));
