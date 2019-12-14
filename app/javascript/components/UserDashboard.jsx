/**
 * Dashboard for the current user, will be under the /dashboard route
 */


import React, {useState} from 'react'

const UserDashboard = (props) => {
    const {currentUser} = props; 

    if (!currentUser) {
        return (<div>Loading...</div>)
    }
    return(
        <div>
            <h1>Welcome, {currentUser.username}</h1>
            <h2>Your email: {currentUser.email}</h2>
            This is a user page. Deal with it.
        </div>
    )
}

export default UserDashboard;