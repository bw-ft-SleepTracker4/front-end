import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { loginUser } from '../api/user'
import * as yup from 'yup'
import LoginContainer from '../components/styles/LoginStyles'

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
                setErrors()
                setErrorsActive(false)
            })
            .catch( error => {
                setErrors(error.message)
                setErrorsActive(true)
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

export default Login