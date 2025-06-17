import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

function Edituser(){

    const {id}=useParams();

    const navigate=useNavigate();

    const [username,setUsername]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')

    useEffect(()=>{
        getUserData()
    },[])

    const getUserData=async()=>{
        const url="http://localhost:3000/users/"+id;
        let response=await fetch(url);
        response=await response.json();

        setUsername(response.username)
        setAge(response.age)
        setEmail(response.email)
    }
    
    const updateUserData=async()=>{
        const url="http://localhost:3000/users/"+id;
        let response=await fetch(url,{
            method:'put',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({username,age,email})
        })
        response=await response.json();
        navigate("/");

    }

    

    
    return(
        <div>
            <h1>Edit User Details</h1>
            <input type="text" onChange={(event)=>setUsername(event.target.value)} value={username} placeholder="enter ur name"/><br />
            <input type="text" onChange={(event)=>setAge(event.target.value)} value={age} placeholder="enter ur age"/><br />
            <input type="text" onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="enter ur email"/><br />
            <button onClick={updateUserData}>Edit User</button>
        </div>
    )
}
export default Edituser