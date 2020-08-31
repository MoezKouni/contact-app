import React, { useState, useEffect } from 'react'
import { editUser } from '../actions/UsersActions'
import { useDispatch } from 'react-redux'

import EditForm from './EditForm'
import DeleteModal from './DeleteModal'


const Modal = ({ showModal, setShowModal, singleUser, editMode, userToDelete }) => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
        setUser(singleUser)

        // eslint-disable-next-line
    }, [])

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editContact = () => {
        dispatch(editUser({...user, updated_at: new Date(Date.now() ).toISOString()}))
        setShowModal()
    }

    return (
        <div>
            {
                showModal && (
                    editMode ? 
                        <EditForm 
                            user={user} 
                            handleChange={handleChange} 
                            editContact={editContact} 
                            setShowModal={setShowModal}
                        /> : 
                         <DeleteModal 
                            setShowModal={setShowModal}
                            userId={userToDelete._id}
                        />
                )
            }
        </div>
    )
}

export default Modal
