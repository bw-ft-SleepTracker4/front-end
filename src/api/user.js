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

export const signupUser = async (name, email, password) => {
  await client()
    .post('/auth/register', { name, username: email, password })
    .then(async res => {
      console.log(res.data)
      // TODO: potentially return user to redux store
      store.dispatch(setUserHasToken(res.data.token))
      localStorage.setItem('token', res.data.token)
      await localStorage.setItem('email', res.data.data.username)
    })
}

export const loginUser = async (email, password) => {
  await client()
    .post('/auth/login', { username: email, password })
    .then(res => {
      // TODO: potentially return user to redux store
      store.dispatch(setUserHasToken(res.data.token))
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('email', res.data.message)
  })
}