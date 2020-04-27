import React from 'react'
import Signup from './components/Signup'
import Navigation from '../src/components/Nav'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUserUsername, setUserEmail, setUserPassword } from './redux/actions/actionCreators'

function App(props) {
  const handleUsernameChange = e => props.setUserUsername(e.target.value)
  const handleEmailChange = e => props.setUserEmail(e.target.value)
  const handlePasswordChange = e => props.setUserPassword(e.target.value)

  return (
    <div className='App'>
      <Navigation /> {/* GLOBAL NAVIGATION */}

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Signup 
            username={props.username} 
            handleUsernameChange={handleUsernameChange} 
            email={props.email} 
            handleEmailChange={handleEmailChange} 
            password={props.password} 
            handlePasswordChange={handlePasswordChange} />
        </Route>

        <ProtectedRoute path='/'>
          <div>HOME</div>
        </ProtectedRoute>
          
      </Switch>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    username: state.username,
    email: state.email,
    password: state.password
  }
}

export default connect(mapStateToProps, { setUserUsername, setUserEmail, setUserPassword })(App)