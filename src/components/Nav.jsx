import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = props => {
    return (
        <nav className='navC'>
            <h4 className='logo'><Link className='navLink' to='/'>SleepTracker</Link></h4>
            <div className='links'>
                <Link className='navLink' to='/home'>Dashboard</Link>
                {props.hasToken ?
                    <Link className='navLink' to='/' onClick={props.handleLogOut}>Log Out</Link>
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