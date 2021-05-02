/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import articles from './articles_reducers';
import auth from './auth_reducer';

export default combineReducers({
    articles,
    auth,
});
