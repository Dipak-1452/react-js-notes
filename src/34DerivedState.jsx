// state that is calculated or derived from other state values
// or props within your component
// Drived state can be a variable.
// No need to extra state only variables or constants are enough

import { useState } from "react"

function Derived(){
    const [users,setusers]=useState([])
    const [user,setuser]=useState('')
    const handleAddusers=()=>{
        setusers([...users,user])
    }
    // Derived state
    const total=users.length
    const last=users[users.length-1]
    const unique=[...new Set(users)].length
    return(
        <div>
            <h2>total users:{total}</h2>
            <h2>last user:{last}</h2>
            <h2>unique users:{unique}</h2>
            <input type="text" onChange={(event)=>setuser(event.target.value)} placeholder="add new user"/>
            <button onClick={handleAddusers}>add user</button>
            {
                users.map((item,index)=>(
                    <h4 key={index}>name:{item}</h4>
                ))
            }
        </div>
    )
}

export default Derived