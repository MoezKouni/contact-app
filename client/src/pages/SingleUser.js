import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Modal from '../components/Modal'
import { motion } from 'framer-motion';
const SingleUser = ({match, history}) => {
    const [singleUser, setSingleUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const users = useSelector(state => state.users.users)
    const publicUsers = useSelector(state => state.users.publicUsers)
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        console.log(typeof users[0]._id)
        console.log(typeof match.params.id)
        let user = users.find(el => el._id === match.params.id)
        if(user){
            setSingleUser(user)
        }else{
            let publicuser = publicUsers.find(el => el._id === match.params.id)
            setSingleUser(publicuser)
        }

        // eslint-disable-next-line
    }, [users])

    const editUser = () => {
        setShowModal(!showModal)
    }

    const showOrHide = () => setShowModal(!showModal)


    return (
        singleUser &&  <motion.div initial={{y: '100vh'}}
        animate={{y: 0}}
        exit={{x: '-100vw'}}
        transition={{ type:'spring', delay: 0.4}} className="container profil">
            <div className="row profil-pic-name flex-column align-items-center justify-content-center my-4">
                <div className="col profil-header">
                    <img src={singleUser.avatar} className="avatar profil-avatar" alt={singleUser.firstname}/>
                    <div className="d-flex align-items-center mt-2">
                        <p className="mr-2 font-weight-bold">{singleUser.firstname.toUpperCase()}</p>
                        <p className="font-weight-bold">{singleUser.lastname.toUpperCase()}</p>
                    </div>
                </div>
            </div>
            <div className="personal-info">
                <div className="row">
                    <div className="col-12 col-sm-6 d-flex" style={{borderRight: '1px solid grey'}}>
                        <span className="font-weight-bold">Phone Number:</span>
                        <p className="font-weight-light ml-2">{singleUser.phone}</p>
                    </div>
                    <div className="col-12 col-sm-6 d-flex">
                        <span className="font-weight-bold">Address: </span>
                        <p className="font-weight-light ml-2">{singleUser.address}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 d-flex" style={{borderRight: '1px solid grey'}}>
                        <span className="font-weight-bold">Email Address:</span>
                        <p className="font-weight-light ml-2">{singleUser.email}</p>
                    </div>
                    <div className="col-12 col-sm-6 d-flex">
                        <span className="font-weight-bold">Occupation: </span>
                        <p className="font-weight-light ml-2">{singleUser.occupation}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 d-flex" style={{borderRight: '1px solid grey'}}>
                        <span className="font-weight-bold">Sexe: </span>
                        <p className="font-weight-light ml-2">{singleUser.sexe}</p>
                    </div>
                    <div className="col-12 col-sm-6 d-flex">
                        <span className="font-weight-bold">Relation:</span>
                        <p className="font-weight-light ml-2">{singleUser.relation}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 d-flex" style={{borderRight: '1px solid grey'}}>
                        <span className="font-weight-bold">Visibility:</span>
                        <p className="font-weight-light ml-2">{singleUser.isPublic ? 'Public' : 'Private'}</p>
                    </div>
                    <div className="col-12 col-sm-6 d-flex">
                        <span className="font-weight-bold">Last Edit: </span>
                        <p className="font-weight-light ml-2">{singleUser.updated_at}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="edit-btn" onClick={history.goBack}>Go Back <i className="fas fa-arrow-left"></i> </button>
                    {singleUser.user === auth.user._id && <button className="edit-btn mr-2" onClick={editUser}>Edit <i className="far fa-edit"></i> </button>}
                </div>
                <Modal showModal={showModal} setShowModal={showOrHide} singleUser={singleUser} editMode={true}/>
            </div>
            {singleUser.user !== auth.user._id && <p className="notOwner mt-2 font-weight-light">You are not the owner of this contact</p>}
        </motion.div>
    )
}

export default withRouter(SingleUser)
