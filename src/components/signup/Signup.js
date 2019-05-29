import React,{useState} from 'react';

const Signup = props =>{

    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit=e=>{
        e.preventDefault();
        if(username.trim()==='' || password.trim()===''){
            return;
        }
        props.onSubmit({username,password});
        setUsername('');setPassword('');
    }
    return(
        <div className='signup'>
            <form onSubmit={handleSubmit} className="signup-form">
                <input onChange={e=>setUsername(e.target.value)} value={username} placeholder="Username" />
                <input type="password" onChange={e=>setPassword(e.target.value)} value={password} placeholder="Password" />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup;