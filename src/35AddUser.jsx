import { useState } from "react"

function AddUser({setuser}){
    
    return(
        <div>
            <h1>add user</h1>
            <input type="text" placeholder="enter ur name" onChange={(event)=>setuser(event.target.value)}/>
        </div>
    )
}

export default AddUser