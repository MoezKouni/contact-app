import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/AuthActions'
import { motion } from 'framer-motion'

const Navbar = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <motion.ul 
            className="navBar" 
            initial={{y: -100}} 
            animate={{y: 0}} 
            transition={{ type:'spring', delay: 0.6}}
            exit={{y: -100}}
        >
            <Link to="/">Home</Link> 
            <Link to="/users">Users</Link>
            <Link to="/add">Add User</Link>
            <Link to="/public">Public Contact</Link>
            <Link to="/" onClick={() => {
                dispatch(logout())
                history.push('/')
            }
            }
                 style={{color: 'red'}}>Logout</Link>
        </motion.ul>
    )
}

export default Navbar
