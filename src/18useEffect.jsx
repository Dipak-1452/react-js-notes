import { useEffect, useState } from "react"

function Us(){
    const [counter,setcounter]=useState(0)
    const [data,setdata]=useState(0)
    function callonce(){
        console.log("callonce function called")
    }
    function counterfun(){
        console.log("counterfuncton")
    }
    useEffect(()=>{
        counterfun()
    },[counter,data])
    useEffect(()=>{
        callonce()
    },[data])
    // handling dependency
    // }) call every time
    // },[]) call only once
    // },[state1]) call on changing single state
    // },[state1,state2]) call on changing both state
    // },[prop1,props2])

    return(
        <div>
            <h1>useEffect Hook</h1>
            <button onClick={()=>setcounter(counter+1)}>Counter:{counter}</button>
            <button onClick={()=>setdata(data+1)}>data:{data}</button>
        </div>
    )
}

export default Us
