import { useState } from "react"

function Adduser(){
    const [username,setUsername]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')

    const createUser=async()=>{
        const url="http://localhost:3000/users"
        let response=await fetch(url,{
            method:'Post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({username:username,age:age,email:email})
        });
        response=await response.json();

    }
    return(
        <div>
            <h1>Add New User</h1>
            <input type="text" onChange={(event)=>setUsername(event.target.value)} placeholder="enter ur name"/><br />
            <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="enter ur age"/><br />
            <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="enter ur email"/><br />
            <button onClick={createUser}>Add User</button>
        </div>
    )
}
export default Adduser