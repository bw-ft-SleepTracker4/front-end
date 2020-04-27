import React from 'react'
import Signup from './components/Signup'
import Navigation from '../src/components/Nav'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUserEmail, setUserPassword } from './redux/actions/actionCreators'

function App(props) {
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
    email: state.email,
    password: state.password
  }
}

export default connect(mapStateToProps, { setUserEmail, setUserPassword })(App)