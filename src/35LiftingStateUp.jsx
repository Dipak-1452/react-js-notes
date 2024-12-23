import AddUser from "./35AddUser"
import DisplayUser from "./35DisplayUser"

import { useState } from "react"

function Lift(){
    const [user,setuser]=useState("")
    return(
        <div>
            <h1>Lifting State Up</h1>
            <AddUser setuser={setuser}/>
            <DisplayUser user={user}/>
        </div>
    )
}

export default Lift