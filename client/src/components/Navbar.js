import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/AuthActions'
import { motion } from 'framer-motion'

const Navbar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    return (
        <motion.ul 
            className="navBar" 
            initial={{y: -100}} 
            animate={{y: 0}} 
            transition={{ type:'spring', delay: 0.6}}
            exit={{y: -100}}
        >
            <Link to="/" style={{fontWeight: location.pathname === "/" ? 600 : 400}}>Home</Link> 
            <Link to="/users" style={{fontWeight: location.pathname === "/users" ? 600 : 400}}>Users</Link>
            <Link to="/add" style={{fontWeight: location.pathname === "/add" ? 600 : 400}}>Add User</Link>
            <Link to="/public" style={{fontWeight: location.pathname === "/public" ? 600 : 400}}>Public Contact</Link>
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
