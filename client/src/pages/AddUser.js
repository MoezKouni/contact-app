import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../actions/UsersActions';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';


const AddUser = () => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        address: '',
        sexe: '',
        isPublic: '',
        relation: '',
        email: '',
        phone: '',
        occupation: ''
    });
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory()
    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const add = () => {
        dispatch(addUser(user))
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 4000);
    }
    return (
            <motion.div 
                className="add-user"
                initial={{x: '100vw'}}
                animate={{x: 0}}
                exit={{x: '-100vw'}}
                transition={{ type:'spring', delay: 0.4}}
            >
                <h1 className="text-center">Add User</h1>
                {show && <div className="add-msg">
                    New contact added to your contact list
                </div>}
                <div className="row mt-2">
                    <div className="col-md-6 col-sm-12 d-flex flex-column">
                        <label>Firstname:</label>
                        <input type="text" value={user.firstname} name="firstname" onChange={handleChange}/>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex flex-column">
                        <label>Lastname:</label>
                        <input type="text" value={user.lastname} name="lastname" onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 col-sm-12 d-flex flex-column">
                        <label>Address:</label>
                        <input type="text" value={user.address} name="address" onChange={handleChange}/>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex flex-column">
                        <label>Sexe:</label>
                        <select name="sexe" onChange={handleChange} defaultValue={user.sexe}>
                            <option value="">choose</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 col-sm-12 d-flex flex-column">
                        <label>Visibility:</label>
                        <select name="isPublic" onChange={handleChange} defaultValue={user.isPublic}>
                            <option value="">choose</option>
                            <option value="true">Public</option>
                            <option value="false">Private</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex flex-column">
                        <label>Relation:</label>
                        <select name="relation" onChange={handleChange} defaultValue={user.relation}>
                            <option value="">choose</option>
                            <option value="colleague">Colleague</option>
                            <option value="family">Family</option>
                            <option value="best friend">Best Friend</option>
                            <option value="friend">Friend</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 col-sm-12 d-flex flex-column">
                        <label>Email Address:</label>
                        <input type="text" value={user.email} name="email" onChange={handleChange}/>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex flex-column">
                        <label>Phone Number:</label>
                        <input type="text" value={user.phone} name="phone" onChange={handleChange}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 col-sm-12 d-flex flex-column">
                        <label>Occupation:</label>
                        <input type="text" value={user.occupation} name="occupation" onChange={handleChange}/>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="edit-btn" onClick={history.goBack}>Cancel</button>
                    <button className="edit-btn" onClick={add}>Add</button>
                </div>
            </motion.div>
    )
}

export default AddUser
