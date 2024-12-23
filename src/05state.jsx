import { useState } from "react"

function Stat(){
    const [fruit,setfruit]=useState("apple")
    const changefruit=()=>{
        setfruit("banana")
    }
    return(
        <div>
            <h1>state in React js</h1>
            <h1>{fruit}</h1>
            <button onClick={changefruit}>change fruit name</button>
            <Counter/>
        </div>
    )
}
export default Stat

const Counter=()=>{
    const [count,setcount]=useState(0)
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>setcount(count+1)}>Update counter</button>
        </div>
    )
}

// state is a container to store data like variable
// this is mutable and dynamic
// it re-render component automatically so that data can visible on UI


// Hooks are the special feature for functional component 
// Hooks let you use different React features from your components
// state
// life cycle methods
// side effects etc

// hooks start with use like useState,useEffect etc