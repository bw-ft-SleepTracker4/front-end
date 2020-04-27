import React from 'react'
import './App.css'
import Navigation from '../src/components/Nav'
import Login from '../src/components/Login'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navigation /> {/* GLOBAL NAVIGATION */}

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <div>
            SIGNUP
          </div>
        </Route>

        <Route path='/'>
          <div>HOME</div>
        </Route>
          
      </Switch>
    </div>

    
  );

}

export default App
