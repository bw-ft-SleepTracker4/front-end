import React from 'react'
import { signupUser } from '../api/user'
import { useHistory } from 'react-router'
import SignupContainer from '../components/styles/SignupStyles'

const Signup = (props) => {
  const history = useHistory()

  const submitSignup = async e => {
    e.preventDefault()
    await signupUser(props.name, props.email, props.password).catch(err => console.error(`error: ${err}`))
    history.push('/home')
  }

  return(
    <SignupContainer>
      <div className='contain'>
        <div className='signupForm'>
          <h1>Sign Up</h1>
          <form>
              <label className='inputContainer'><input type="text" name="name" value={props.name} onChange={props.handleNameChange} placeholder="Name" /></label>
              <label className='inputContainer'><input type="email" name="email" value={props.email} onChange={props.handleEmailChange} placeholder="Email" /></label>
              <label className='inputContainer'><input type="password" name="password" value={props.password} onChange={props.handlePasswordChange} placeholder="Password" /></label>
          </form>
          <button onClick={submitSignup}>Submit</button>
        </div>
      </div>
    </SignupContainer>
  )
}

export default Signup