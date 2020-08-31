import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../actions/AuthActions'
import { getUsers } from '../actions/UsersActions'
import UserCard from '../components/UserCard'
import { motion } from 'framer-motion';

const Users = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const users = useSelector(state => state.users.users)
    useEffect(() => {
        dispatch(loadUser())
        dispatch(getUsers())

        // eslint-disable-next-line
    }, [auth.isAuthenticated])
    
    return (
        <motion.div 
            initial={{x: '100vw'}}
            animate={{x: 0}}
            transition={{ type:'spring', delay: 0.4}}
            exit={{x: '-100vw'}}
            className="users container"
        >
            {auth.user && <div className="welcome-header">
                <img className="avatar ml-4" src={auth.user.avatar} alt={auth.user.firstname} />
                <h1 className="text-center welcome my-4">Hello <span>{auth.user.firstname}</span>, your contact are here safe!</h1>
                </div>}
            <div className="user-list row justify-content-between">
                {users && users.map(el => <UserCard info={el} key={el._id}/>)}
            </div>
        </motion.div>
    )
}

export default Users
