import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = props => {

    return (
        <nav>
            <h1>Sitename</h1>
            <div className='links'>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/login'>Login</Link>
                <Link className='navLink' to='/signup'>Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navigation