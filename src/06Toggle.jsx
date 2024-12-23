import { useState } from "react";
function Togg(){
    const [display,setdisplay]=useState(true)
    return(
        <div>
            <h1>toggle in react js</h1>
            {
                display?<h1>dipak</h1>:null
            }
            <button onClick={()=>setdisplay(!display)}>toggle</button>
        </div>
    )
}

export default Togg