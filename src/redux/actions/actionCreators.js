import actionTypes from './actionTypes'

// user authentication
export const setUserLogin = (name, email, password) => ({ type: actionTypes.SET_USER_LOGIN, payload: {name, email, password} })
export const setUserName = (name) => ({ type: actionTypes.SET_USER_NAME, payload: name })
export const setUserEmail = (email) => ({ type: actionTypes.SET_USER_EMAIL, payload: email })
export const setUserPassword = (password) => ({ type: actionTypes.SET_USER_PASSWORD, payload: password })
export const setUserHasToken = (token) => ({ type: actionTypes.SET_USER_HAS_TOKEN, payload: token })
export const logUserOut = () => ({ type: actionTypes.LOG_USER_OUT })

// user data 
export const setUserSleepHours = (hours) => ({ type: actionTypes.SET_USER_SLEEP_HOURS, payload: hours })
export const setUserMood = (mood) => ({ type: actionTypes.SET_USER_MOOD, payload: mood })
export const sendUserSleepData = (sleepData) => ({ type: actionTypes.SEND_USER_SLEEP_DATA, payload: sleepData })