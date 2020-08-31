import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
    const alerts = useSelector(state => state.alert)
    return (
        
            alerts.length > 0 && alerts.map((alert, i) => <div className="alert-login" key={i}>
                <p>{alert.msg}</p>
            </div>)
        
    )
}

export default Alert
