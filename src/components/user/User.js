import React from 'react';

const User = props =>{
    return(
        <div className='user'>
            <h6>{props.user.username}</h6>
            <p>{props.user.password}</p>
            <button onClick={props.onToggleRole.bind(this,props.user)}>{props.user.admin?'Admin':'User'}</button>
            <button onClick={props.onDelete.bind(this,props.user._id)}>X</button>
        </div>
    )
}

export default User;