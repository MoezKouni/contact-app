import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import  { register } from '../actions/AuthActions'
import { motion } from 'framer-motion'
import  { showAlert, removeAlert } from '../actions/AlertAction'
import Alert from '../components/Alert'

const Confirm = ({information: {firstname, lastname, age, sexe, address, phone, email, password}}) =>  {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const history = useHistory()

    useEffect(() => {
        if(auth.isAuthenticated){
            return history.push('/users')
        }
        if(auth.errors && typeof auth.errors === 'object'){
            auth.errors.map(el => {
                dispatch(showAlert(el))
                return setTimeout(() => dispatch(removeAlert(el)), 5000)
            })
        }
        // eslint-disable-next-line
    }, [auth.isAuthenticated, auth.errors])

    return (
        <motion.div 
            initial={{x: '100vw'}}
            animate={{x: 0}}
            transition={{ type:'spring', delay: 0.4}}
            exit={{x: '-100vw'}}
            className="form-confirm"
        >
            <Alert />
            <div className="row">
                <div className="col">
                    <span>Firstname:</span>
                    <p>{firstname}</p>
                </div>
                <div className="col">
                    <span>Lastname:</span>
                    <p>{lastname}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>Age:</span>
                    <p>{age}</p>
                </div>
                <div className="col">
                    <span>Sexe:</span>
                    <p>{sexe}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>Address:</span>
                    <p>{address}</p>
                </div>
                <div className="col">
                    <span>Phone Number:</span>
                    <p>{phone}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>Email Address:</span>
                    <p>{email}</p>
                </div>
                <div className="col">
                    <div className="d-flex align-items-center">
                        <span>Password:</span>
                        {show ? <i className="far fa-eye" onClick={() => setShow(!show)}></i> : <i className="far fa-eye-slash" onClick={() => setShow(!show)}></i>}
                    </div>
                    {show && <p className="m-0">{password}</p>}
                </div>
            </div>
            <div className="confirm-btns">
                <i className="fas fa-arrow-left next-btn fa-2x" onClick={history.goBack}></i>
                <i className="fas fa-check fa-2x" onClick={() => dispatch(register(
                    {firstname, lastname, age, sexe, address, phone, email, password}
                ))}></i>
            </div>
        </motion.div>
    )
}
export default Confirm
