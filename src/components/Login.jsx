import React from 'react'
import styled from 'styled-components'

const Login = props => {

    return (
        <LoginContainer>
            <h1>Login</h1>
            <form>
                <label className='inputContainer'><input 
                    type='text'
                    name='email'
                    placeholder='Email'
                    >
                </input></label>

                <label className='inputContainer'><input
                    type='password'
                    name='password'
                    placeholder='Password'
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