import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../actions/UsersActions'

const DeleteModal = ({setShowModal, userId}) => {
    const dispatch = useDispatch()

    const remove = () => {
        dispatch(deleteUser(userId))
        setShowModal()
    }
    
    return (
        <div>
            <div className="delete-modal-background">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <i className="fas text-center fa-exclamation-triangle fa-3x"></i>
                    <h1 className="text-center ml-2">Delete Contact</h1>
                </div>
                <p className="text-center">Are you sure you want to delete this contact ?</p>
                <div className="delete-btns">
                    <button className="delete-btn delete mr-2" onClick={remove}>Delete</button>
                    <button className="delete-btn" onClick={setShowModal}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
