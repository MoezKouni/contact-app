import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from './Modal';
import { motion } from 'framer-motion'

const UserCard = ({ info }) => {
    const [showModal, setShowModal] = useState(false);
    const auth = useSelector(state => state.auth)
    const showOrHide = () => setShowModal(!showModal)

    return (
        <motion.div whileHover={{scale: 1.1}} className="col-12 col-md-3 justify-content-md-center align-items-center user-card p-2 py-4">
            <img src={info.avatar} className="avatar" alt={info.firstname}/>
            <div className="name mt-2">
                <p className="mr-2">{info.firstname.toUpperCase()}</p>
                <p>{info.lastname.toUpperCase()}</p>
            </div>
            <p className="occupation">{info.occupation}</p>
            <div className="d-flex justify-content-around w-100 mb-2">
                <div className="short-info">
                    <i className="fas fa-globe-europe "></i>
                    <p className="card-info">{info.isPublic ? 'Public' : 'Private'}</p>
                    <p className="occupation">Visibility</p>
                    </div>   
                <div className="short-info">
                    <i className="fas fa-link"></i>
                    <p className="card-info">{info.relation}</p>
                    <p className="occupation">Relation</p>
                </div>
                {info.user === auth.user._id && <div className="short-info" onClick={showOrHide} >
                    <i className="far fa-trash-alt"></i>
                    <p className="card-info">Delete</p>
                </div>}
            </div>
            <Link to={`/user/${info._id}`}><button className="btn-card">See More</button></Link>
            <Modal showModal={showModal} setShowModal={showOrHide} editMode={false} userToDelete={info}/>
            {info.created_at !== info.updated_at && <p className="updatedUser">User Updated</p>}
        </motion.div>
)
}

export default UserCard
