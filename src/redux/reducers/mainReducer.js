import actionTypes from '../actions/actionTypes'

export const initialState = () => ({
  user: {
    name: '',
    email: '',
    password: '',
    hasToken: localStorage.getItem('token') || null
  }
})

export const reducer = (state = initialState(), action) => {
  switch(action.type) {
    case actionTypes.SET_USER_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload
        }
      }
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
    case actionTypes.SET_USER_HAS_TOKEN:
      return {
        ...state,
        user: {
          ...state.user,
          hasToken: action.payload
        }
      }
    case actionTypes.LOG_USER_OUT:
      return {
        ...state,
        user: {
          name: '',
          email: '',
          password: '',
          hasToken: null
        }
      }
    default:
      return state
  }
}