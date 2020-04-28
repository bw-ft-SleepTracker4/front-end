import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { loginUser } from '../api/user'
import styled from 'styled-components'
import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email('⚠️ A VALID EMAIL IS REQUIRED')
        .required('⚠️ A VALID EMAIL IS REQUIRED'),
    password: yup
        .string()
        .required('⚠️ A PASSWORD IS REQUIRED')
})

const Login = props => {
    const [ loginDisabled, setLoginDisabled ] = useState(true)
    const [ errors , setErrors ] = useState()
    const [ errorsActive, setErrorsActive ] = useState(false)
    const [ PrintErr, setPrintErr ] = useState()
    const history = useHistory()

     // validation for submit button disabled
    useEffect(() => {
        formSchema.isValid(props.user)
            .then ( valid => {
                setLoginDisabled(!valid)
            })
      
        if (errorsActive === true){
            setPrintErr(<div className='error'>{errors}</div>)
            
        } else {
            setPrintErr()
        }

    }, [errors, errorsActive, props.user])

    // INPUT EVENT HANDLER FOR EMAIL/PASSWORD +VALIDATION WITH YUP
    const onInputChange = e => {
        const name = e.target.name
        const value = e.target.value
        
        if(name === 'email') {
            props.handleEmailChange(e)
        } else {
            props.handlePasswordChange(e)
        }

        yup
            .reach(formSchema, name)
            .validate(value)
            .then( valid => {
                setErrors({
                    ...errors,
                    [name]: ''
                })
                setErrorsActive(false)
            })
            .catch( error => {
                setErrors({
                    ...errors,
                    error
                })
                setErrorsActive(false)
            })
    }

    // SUBMIT BUTTON EVENT HANDLER
    const onLogin = async e => {
        e.preventDefault()
        await loginUser(props.email, props.password).catch(err => console.error(`error: ${err}`))
        history.push('/home')
    }

    return (
        <LoginContainer>
            {PrintErr} {/* DISPLAYS ERROR MESSAGE */}

            <div className='contain'>
                <div className='loginForm'>
                    <h1>Login</h1>
                    <form>
                    <label className='inputContainer'>
                        <input
                            type='text'
                            name='email'
                            placeholder='Email'
                            value={props.user.email}
                            onChange={onInputChange} />
                    </label>

                    <label className='inputContainer'>
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={props.user.password}
                            onChange={onInputChange} />
                    </label>
                    </form>
                    <button onClick={onLogin} disabled={loginDisabled}>Login</button>
                </div>
            </div>
        </LoginContainer>
    )
}

// STYLED COMPONENTS //
const LoginContainer = styled.div`
    background-image: url('https://images.pexels.com/photos/1361215/pexels-photo-1361215.jpeg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    
  
    
    .error{
        background-color: rgb(223, 71, 71);
        color: white;
        font-size: .8rem;
        text-align: center;
        position: absolute;
        width: 100%;
        
    }

    .contain {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;
    
        
        .loginForm{
            width: 50%;
            height: 60%;
            align-self: center;
            background-color: rgba(32, 32, 32, 0.401);
            display: flex;
            flex-direction: column;
            justify-content: center;
            backdrop-filter: blur(2px);
            
 
            h1 {
            width: 100%;
            color: white;
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
            width: 10%;
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

export default Login