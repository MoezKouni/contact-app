import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { motion } from 'framer-motion';


const RegisterInformation = ({ handleChange, information: { address, phone, email, password }, history }) => {

    return (
        <motion.div 
            className="form"
            initial={{x: '100vw'}}
            animate={{x: 0}}
            transition={{ type:'spring', delay: 0.4}}
            exit={{x: '-100vw'}}
        >
            <div className="register-form">
                <div className="form-field">
                    <label>Address:</label>
                    <input type="text" name="address" onChange={e => handleChange(e)} value={address}/>
                </div>
                <div className="form-field">
                    <label>Phone Number:</label>
                    <input type="text" name="phone" onChange={e => handleChange(e)} value={phone}/>
                </div>
                <div className="form-field">
                    <label>Email Address:</label>
                    <input type="text" name="email" onChange={e => handleChange(e)} value={email}/>
                </div>
                <div className="form-field">
                    <label>Password:</label>
                    <input type="password" name="password" onChange={e => handleChange(e)} value={password}/>
                </div>
                <div className="register-btns">
                    <motion.i 
                        initial={{x: '100vw'}}
                        animate={{x: 0}}
                        transition={{ type:'spring', delay: 0.4}}
                        exit={{x: '-100vw'}}
                        className="fas fa-arrow-left next-btn fa-2x"
                        onClick={history.goBack}
                    ></motion.i>
                    {(address && phone && email && password) && <Link to="/confirm" className="next-btn">
                        <motion.i 
                            initial={{x: '100vw'}}
                            animate={{x: 0}}
                            transition={{ type:'spring', stiffness: 110 }}
                            className="fas fa-arrow-right fa-2x"
                        ></motion.i></Link>}
                    
                </div>
            </div>
        </motion.div>
    )
}

export default withRouter(RegisterInformation)
