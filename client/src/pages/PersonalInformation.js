import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const arrowVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            type:'spring',
            stiffness: 110 
        }
    },
    hover: {
        scale: 1.2,
        textShadow: "0px 3px 8px rgba(0,0,0, .2)"
    }
}

const PersonalInformation = ({handleChange, information: {firstname, lastname, age, sexe}}) => {
    
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
                    <label>Firstname:</label>
                    <input type="text" name="firstname" onChange={e => handleChange(e)} value={firstname} />
                </div>
                <div className="form-field">
                    <label>Lastname:</label>
                    <input type="text" name="lastname" onChange={e => handleChange(e)} value={lastname}/>
                </div>
                <div className="form-field">
                    <label>Age:</label>
                    <input type="text" name="age" onChange={e => handleChange(e)} value={age}/>
                </div>
                <div className="form-field">
                    <label>Sexe:</label>
                    <select name="sexe" onChange={e => handleChange(e)} value={sexe} >
                        <option value="">sexe</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                    </select>
                </div>
                {(firstname && lastname && age && sexe) && <Link to="/register" className="next-btn">
                    <motion.i 
                        variants={arrowVariants}
                        initial="hidden"
                        whileHover="hover"
                        animate="visible"
                        className="fas fa-arrow-right fa-2x"
                    >
                    </motion.i>
                    </Link>}
            </div>
        </motion.div>
    )
}

export default PersonalInformation
