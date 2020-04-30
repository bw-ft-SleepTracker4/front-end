import actionTypes from '../actions/actionTypes'
import graph from '../../mock_data/graph'
import moment from 'moment'

export const initialState = () => ({
  graphData: [...graph],
  user: {
    name: '',
    email: '',
    password: '',
    hasToken: localStorage.getItem('token') || null
  },
  userSleepData: {
    date: moment().format('l'),
    sleep_hours: null,
    mood: null
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
    case actionTypes.SET_USER_SLEEP_HOURS:
      return {
        ...state,
        userSleepData: {
          ...state.userSleepData,
          sleep_hours: action.payload
        }
      }
    case actionTypes.SET_USER_MOOD:
      return {
        ...state,
        userSleepData: {
          ...state.userSleepData,
          mood: action.payload
        }
      }
    case actionTypes.SEND_USER_SLEEP_DATA:
      return {
        ...state,
        graphData: [...state.graphData, action.payload]
      }
    default:
      return state
  }
}