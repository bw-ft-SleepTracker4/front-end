import actionTypes from './actionTypes'

export const setUserLogin = (name, email, password) => ({ type: actionTypes.SET_USER_LOGIN, payload: {name, email, password} })
export const setUserName = (name) => ({ type: actionTypes.SET_USER_NAME, payload: name })
export const setUserEmail = (email) => ({ type: actionTypes.SET_USER_EMAIL, payload: email })
export const setUserPassword = (password) => ({ type: actionTypes.SET_USER_PASSWORD, payload: password })
export const setUserHasToken = (token) => ({ type: actionTypes.SET_USER_HAS_TOKEN, payload: token })