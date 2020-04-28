import React from 'react'
import { Link } from 'react-router-dom'
import store from '../redux/store/store'

const Navigation = props => {
    const state = store.getState()
    return (
        <nav className='navC'>
            <h4 className='logo'><Link className='navLink' to='/'>Sleep Tracker</Link></h4>
            <div className='links'>
                <Link className='navLink' to='/home'>Home</Link>
                {state.user.hasToken ?
                    <Link className='navLink' to='/'>Log Out</Link>
                :
                <>
                    <Link className='navLink' to='/login'>Login</Link>
                    <Link className='navLink' to='/signup'>Sign Up</Link>
                </>}
                
            </div>
        </nav>
    )
}

export default Navigation