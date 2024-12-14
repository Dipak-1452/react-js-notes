import { useState, useTransition } from "react";

function Trans(){

    // const [pending,setpending]=useState(false)
    // const handleButton=async()=>{
    //     setpending(true)
    //     await new Promise(res=>setTimeout(res,2000))
    //     setpending(false)
    // }
    const [pending,startTransition]=useTransition()

    const handleButton=()=>{
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,2000))
        })
    }
    return(
        <div>
            <h1>useTransition hook in react js</h1>
            {pending?<img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"></img>:null}
            <button disabled={pending} onClick={handleButton}>click</button>
        </div>
    )
}

export default Trans