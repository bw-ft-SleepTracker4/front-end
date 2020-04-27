import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'


const initialLoginFormValues = {
    email: '',
    password: '',
}
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

    const [ loginFormValues, setLoginFormValues ] = useState(initialLoginFormValues)
    const [ loginDisabled, setLoginDisabled ] = useState(true)
    const [ errors , setErrors ] = useState()
    const [ loggedUser, setLoggedUser ] = useState([])

    useEffect(() => {
        formSchema.isValid(loginFormValues)
            .then ( valid => {
                setLoginDisabled(!valid)
            })
    }, [loginFormValues])


    const onInputChange = e => {
        const name = e.target.name
        const value = e.target.value


        yup 
            .reach(formSchema, name)
            .validate(value)
            .then( valid => {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            })
            .catch( error => {
                setErrors({
                    ...errors,
                    error
                })
            })

        setLoginFormValues({
            ...loginFormValues,
            [name]: value
        })
    }

    const onLogin = e => {

        e.preventDefault()

        const newLoggedUser = [{
            email: loginFormValues.email,
            password: loginFormValues.password
        }]

        setLoggedUser(newLoggedUser)
        setLoginFormValues(initialLoginFormValues)
    }


    return (
        <LoginContainer>
            <h1>Login</h1>
            <form>
                <label className='inputContainer'><input 
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={loginFormValues.email}
                    onChange={onInputChange}
                    >
                </input></label>

                <label className='inputContainer'><input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={loginFormValues.password}
                    onChange={onInputChange}
                    >
                </input></label>
            </form>
            <button onClick={onLogin} disabled={loginDisabled}>Login</button>

            {loggedUser.map( u => {
                
                return (
                    <div>Welcome {u.email}!</div>
                )
            })}
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