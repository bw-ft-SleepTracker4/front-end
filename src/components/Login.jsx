import React, { useState } from 'react'
import styled from 'styled-components'

const initialLoginFormValues = {
    email: '',
    password: '',
}

const Login = props => {

    const [ loginFormValues, setLoginFormValues ] = useState(initialLoginFormValues)


    const onInputChange = e => {
        const name = e.target.name
        const value = e.target.value

        setLoginFormValues({
            ...loginFormValues,
            [name]: value
        })
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
            <button>Login</button>
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

            &:hover {
                background-color: black;
                color: white;
                cursor: pointer;
                
                
            }
            
        }
    
    
`

export default Login