import { useState } from "react";
function Con(){
    const [count,setcount]=useState(0)
    return(
        <div>
            <h1>Multiple condition in react js</h1>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>Counter</button>
            {
                count==0?<h1>condition 0</h1>
                :count==1?<h1>condition 1</h1>
                :count==2?<h1>condition 2</h1>
                :count==3?<h1>condition 3</h1>
                :<h1>other condition</h1>
            }
        </div>
    )
}

export default Con