import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email('A VALID EMAIL IS REQUIRED')
        .required('A VALID EMAIL IS REQUIRED'),
    password: yup
        .string()
        .required()
})

const Login = props => {
    const [ loginDisabled, setLoginDisabled ] = useState(true)
    const [ errors , setErrors ] = useState()
    const [ errorsActive, setErrorsActive ] = useState(false)
    const [ PrintErr, setPrintErr ] = useState()

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
                setErrorsActive(true)
            })
    }

    const onLogin = e => {
        e.preventDefault()
    }


    return (
        <LoginContainer>
            {PrintErr}
            <h1>Login</h1>
            <form>
                <label className='inputContainer'><input 
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={props.user.email}
                    onChange={onInputChange}
                    >
                </input></label>

                <label className='inputContainer'><input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={props.user.password}
                    onChange={onInputChange}
                    >
                </input></label>
            </form>
            <button onClick={onLogin} disabled={loginDisabled}>Login</button>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 80vh;
    
    

        h1 {
            width: 100%;
            
        }
        form {
            display: flex;
            flex-direction: column;
            
            
            .inputContainer {
                width: 100%;
                padding: 1%;
                
                input {
                    padding: 1%;
                    width: 20%;
                    
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
    
    
`

export default Login