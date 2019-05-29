import React,{useState,useEffect} from 'react';
import './App.css';
import Users from './components/user/Users';
import Signup from './components/signup/Signup';

function App() {
  const [users,setUsers] = useState([]);
  const [filteredUsers,setFilteredUsers] = useState([]);
  
  const getUsers =()=>{
    fetch(`http://localhost:9000/api/users`)
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      setUsers(res)
      setFilteredUsers(res);
    })
  }

  const saveUser = user =>{
    console.log(user);
    fetch(`http://localhost:9000/api/signup`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(user)
    }).then(res=>res.json())
    .then(res=>{
      console.log('signup res',res);     
        getUsers();     
    })
  }

  const removeUser = id =>{
    fetch(`http://localhost:9000/api/user`,{
      method:"DELETE",
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({id})
    }).then(res=>res.json())
    .then(res=>{
      console.log('delete user res',res);      
      getUsers();
    })
  }

  const updateUser = (user)=>{
    fetch(`http://localhost:9000/api/user`,{
      method:"PUT",
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(user)
    }).then(res=>res.json())
    .then(res=>{
      console.log('delete user res',res);      
      getUsers();
    })
  }

  useEffect(()=>{
    getUsers();

  },[])

  const handleSearchChange=e=>{
    const s = e.target.value;
    console.log(s);
    let filteredUsers = users.filter(user=>{
      if(user.username.toLowerCase().search(s.toLowerCase())===-1){
        return false;
      }
      return true;
    })
    console.log('filteredUsers',filteredUsers);
    setFilteredUsers(filteredUsers);
  }

  const handleSignup = (user)=>{    
    user.admin = true;
    saveUser(user);
  }
  const handleUsreDelete = (id)=>{
    console.log(id);
    removeUser(id);
  }
  const onToggleRole = user =>{
    user.admin = !user.admin;
    updateUser(user);
  }
  return (
    <div className="App">
      <div>
      <input onChange={handleSearchChange} placeholder="Search.." className="search-input"/>
      { filteredUsers && filteredUsers.length>0 && 
        <Users users={filteredUsers} onDelete={handleUsreDelete} onToggleRole={onToggleRole}/>
      }
      </div>
      <div>
        <Signup onSubmit={handleSignup}/>
      </div>

      
    </div>
  );
}

export default App;
