import React, { useState, useEffect } from 'react'
import Alert from '../components/Alert'
import { useDispatch, useSelector } from 'react-redux'
import  { showAlert, removeAlert } from '../actions/AlertAction'
import { login } from '../actions/AuthActions'
import { motion } from 'framer-motion';

const Login = (props) => {
    const [crendentiels, setCrendentiels] = useState({
        email: '',
        password: ''
    });
    const handleChange = e => {
        setCrendentiels({...crendentiels, [e.target.name]: e.target.value})
    }
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        if(auth.isAuthenticated){
            return props.history.push('/users')
        }
        if(auth.errors && typeof auth.errors === 'object'){
            auth.errors.map(el => {
                dispatch(showAlert(el))
                return setTimeout(() => dispatch(removeAlert(el)), 5000)
            })
        }
        // eslint-disable-next-line
    }, [auth.isAuthenticated, auth.errors])

    const loginNow = () => {
        if(crendentiels.email && crendentiels.password){
            return dispatch(login(crendentiels))
        } else {
            dispatch(showAlert({msg: 'All fields are required!'}))
            return setTimeout(() => dispatch(removeAlert({msg: 'All fields are required!'})), 5000)
        }
        
    }
    return (
        <motion.div 
            initial={{x: '100vw'}}
            animate={{x: 0}}
            transition={{ type:'spring', delay: 0.4 }}
            exit={{x: '-100vw'}}
            className="form"
        >
            <div className="register-form">
                <Alert />
                <div className="form-field">
                    <label>Email Address:</label>
                    <input type="text" name="email" onChange={handleChange} value={crendentiels.email}/>
                </div>
                <div className="form-field">
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} value={crendentiels.password}/>
                </div>
                <div className="login-btns"> 
                    <button onClick={loginNow} className="edit-btn">Login <i className="fas fa-sign-in-alt"></i></button>
                </div>
            </div>
        </motion.div>
    )
}

export default Login