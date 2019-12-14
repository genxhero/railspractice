/**
 * Dashboard for the current user, will be under the /dashboard route
 */


import React, {useState} from 'react'

const UserDashboard = (props) => {
    const {user, currentUser} = props; 
    return(
        <div>
            <h1>Welcome, {user.username}</h1>
            <h2>Your email: {user.email}</h2>
            This is a user page. Deal with it.
        </div>
    )
}

export default UserDashboard;