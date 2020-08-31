import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion';
import { loadUser } from '../actions/AuthActions'
import { getUsers } from '../actions/UsersActions'



const Home = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const history = useHistory()
    useEffect(() => {
        if(auth.token){
            dispatch(loadUser())
            dispatch(getUsers())
        }
        // eslint-disable-next-line
    }, [])
    return (
        <motion.div
            className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: 'easeInOut'}}
        >
            <motion.div 
                initial={{x: '100vw'}}
                animate={{x: 0}}
                transition={{ type: 'tween', ease: 'easeInOut' }} 
                exit={{x: '-100vw'}}
                className="triangle"
            ></motion.div>
            <div className="wrapper">
                <motion.div 
                    initial={{y: '100vh'}} 
                    animate={{y: 0}}
                    transition={{ delay: 0.5, ease: 'easeInOut' }} 
                    exit={{y: '-100vh'}}
                    className="intro"
                >
                    <h1>Secure</h1>
                    <h1>Your</h1>
                    <h1>Contact</h1>
                    <p>Keep your contacts book safe for free</p>
                </motion.div>
                <motion.div 
                    className="home-btns"
                    initial={{y: '-100vh'}} 
                    animate={{y: 0, ease: 'easeInOut'}}
                    exit={{y: '100vh'}}
                    transition={{ delay: 0.7 }} 
                >
                    {auth.user && <p className="go-to-dashboard" onClick={() => history.push('/users')}>Hey {auth.user.firstname}, Want To Go Back To Your Dashboard ?</p>}
                    {!auth.user && <div className="home-btns"><Link to="/login"><button className="edit-btn home-btn mb-2">Login</button></Link>
                    <Link to="/perso-register"><button className="edit-btn home-btn">Register</button></Link></div>}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Home
