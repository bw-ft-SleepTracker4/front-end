import React from 'react'
import { signupUser } from '../api/user'
import { useHistory } from 'react-router'
import styled from 'styled-components'

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

// STYLED-COMPONENTS //
const SignupContainer = styled.div`
  background-image: url('https://images.pexels.com/photos/627823/pexels-photo-627823.jpeg');
  /* background-position: center; */
  background-size: 100% 100%;
  
  
  

  .contain {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;
    font-family: 'Raleway';
    font-size: .8rem;
    
        
    .signupForm{
      width: 50%;
      height: 60%;
      align-self: center;
      background-color: rgba(26, 26, 26, 0.581);
      display: flex;
      flex-direction: column;
      justify-content: center;
      backdrop-filter: blur(2px);
      
      
      
        h1 {
          width: 100%;
          color: white;
          font-family: 'Raleway';
          margin-bottom: 5%;
        }

        form {
          display: flex;
          flex-direction: column;
      
            .inputContainer {
              width: 100%;
              padding: 1%;
                
                input {
                    padding: 1%;
                    width: 40%;
                    
                }
            }
        }
        button {
            width: 15%;
            align-self: center;
            padding: 1%;
            border-radius: 15px;
            outline: none;
            margin-top: 1%;

                &:hover:enabled {
                    background-color: black;
                    color: white;
                    cursor: pointer;  
                }

        }
    }
`


export default Signup