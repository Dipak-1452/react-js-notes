import { useState } from "react"
import Counter from "./19"

function Use(){
    const [count,setcount]=useState(0)
    const [display,setdisplay]=useState(true)
    
    return(
         <div>
        {
            display?<Counter count={count}/>:null
        }
        <h1>handle props side effect with useeffect in component</h1>
        <button onClick={()=>setcount(count+1)}>counter</button>
        <button onClick={()=>setdisplay(!display)}>toggle</button>
        
         </div>        
    )
}

export default Use
 