// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { signup, login, authenticate } from './workers';

export function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

export function* watchLogin () {
    yield takeEvery(types.LOGIN_ASYNC, login);
}

export function* watchAuthenticate () {
    yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchLogin), call(watchAuthenticate)]);
}
