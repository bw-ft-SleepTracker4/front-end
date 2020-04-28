import axios from 'axios'

export const client = authToken => {
  return axios.create({
    headers: {
      authorization: authToken
    },
    baseURL: 'https://sleeptracker-4.herokuapp.com/api'
  })
}

export const signupUser = async (email, password) => {
  client()
    .post('/auth/register', { username: email, password: password })
    .then(res => {
      console.log(res.data)
      // TODO: potentially return user to redux store
      localStorage.setItem('token', res.data.token)
  })
}

export const loginUser = async (email, password) => {
  client()
    .post('/auth/')
}