import axios from 'axios'
import store from '../redux/store/store'
import { setUserHasToken } from '../redux/actions/actionCreators'

export const client = () => {
  const authToken = localStorage.getItem('token')
  return axios.create({
    headers: {
      authorization: authToken
    },
    baseURL: 'https://sleeptracker-4.herokuapp.com/api'
  })
}

export const signupUser = async (email, password) => {
  await client()
    .post('/auth/register', { username: email, password: password })
    .then(res => {
      // TODO: potentially return user to redux store
      console.log(res.data)
      store.dispatch(setUserHasToken(res.data.token))
      localStorage.setItem('token', res.data.token)
    })
}

export const loginUser = async (email, password) => {
  await client()
    .post('/auth/login', { username: email, password })
    .then(res => {
      // TODO: potentially return user to redux store
      console.log(res.data)
      store.dispatch(setUserHasToken(res.data.token))
      localStorage.setItem('token', res.data.token)
  })
}