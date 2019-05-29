import React from 'react';
import User from './User';

const Users = props =>{
    return(
        <div className='users'>
         {  props.users && props.users.length>0 &&
            props.users.map(user=>(
                <User user={user} key={user._id} onDelete={props.onDelete} onToggleRole={props.onToggleRole}/>
            )) 
         }  
        </div>
    )
}

export default Users;