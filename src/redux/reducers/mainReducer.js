import actionTypes from '../actions/actionTypes'

export const initialState = () => ({
  username: '',
  email: '',
  password: ''
})

export const reducer = (state = initialState(), action) => {
  switch(action.type) {
    case actionTypes.SET_USER_USERNAME:
      return {
        ...state,
        username: action.payload
      }
    case actionTypes.SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case actionTypes.SET_USER_PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    default:
      return state
  }
}