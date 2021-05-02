/* eslint-disable prettier/prettier */
import { FETCH_ARTICLES, ARTICLE_ERROR } from './types';

import axios from 'axios';

export const fetchArticles = () => async dispatch => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res)
        dispatch({
            type:FETCH_ARTICLES,
            payload:res,
        });
    } catch (error) {
        dispatch({
            type: ARTICLE_ERROR,
            PAYLOAD:{mdg:error.statusText, status: error.status},
        });
    }
};
