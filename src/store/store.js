/* eslint-disable prettier/prettier */
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/articles_reducers';

const initialState = {};

const middleware = [thunk];

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;