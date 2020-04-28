import actionTypes from '../actions/actionTypes'

export const initialState = () => ({
  user: {
    email: '',
    password: ''
  }
})

export const reducer = (state = initialState(), action) => {
  switch(action.type) {
    case actionTypes.SET_USER_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload
        }
      }
    case actionTypes.SET_USER_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.payload
        }
      }
    case actionTypes.SET_USER_LOGIN:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}