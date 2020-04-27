import actionTypes from './actionTypes'

export const setUserUsername = (username) => ({ type: actionTypes.SET_USER_USERNAME, payload: username })
export const setUserEmail = (email) => ({ type: actionTypes.SET_USER_EMAIL, payload: email })
export const setUserPassword = (password) => ({ type: actionTypes.SET_USER_PASSWORD, payload: password })