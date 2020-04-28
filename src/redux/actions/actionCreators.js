import actionTypes from './actionTypes'

export const setUserLogin = (email, password) => ({ type: actionTypes.SET_USER_LOGIN, payload: {email, password} })
export const setUserEmail = (email) => ({ type: actionTypes.SET_USER_EMAIL, payload: email })
export const setUserPassword = (password) => ({ type: actionTypes.SET_USER_PASSWORD, payload: password })