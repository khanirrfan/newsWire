/* eslint-disable prettier/prettier */
import { FETCH_ARTICLES } from '../actions/types';

const initialState = {
    articles :[],
};

export default function(state = initialState, action){
    const { type, payload } = action;
    switch(type){

        case FETCH_ARTICLES:

            return { 
                ...state, 
                articles: payload.data};

        default:
            return state;
    }
}
