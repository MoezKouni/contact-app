import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPublicUsers } from '../actions/UsersActions';
import UserCard from '../components/UserCard';
import { motion } from 'framer-motion';

const PublicUsers = () => {
    const publicUsers = useSelector(state => state.users.publicUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPublicUsers())

         // eslint-disable-next-line
    }, [])

    return (
        <motion.div 
            initial={{x: '100vw'}}
            animate={{x: 0}}
            transition={{ type:'spring', delay: 0.4}}
            exit={{x: '-100vw'}}
            className="users container"
        >
            <div className="user-list row justify-content-between">
                {
                    publicUsers && publicUsers.map(el => <UserCard info={el} key={el._id}/>)
                }
            </div>
        </motion.div>
    )
}

export default PublicUsers
