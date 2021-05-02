/* eslint-disable prettier/prettier */
import { LOGIN, REGISTER, ERRORMESSAGE } from '../actions/types';

const initialState = {
    user: [],
    isAuthenticated: false,
    error: '',
};

export default function (state = initialState, action) {
    console.log(state);
    const { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
}
