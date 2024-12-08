import { useState } from "react"
import Clock from "./16clock"

function Task(){
    const [color,setcolor]=useState("red")
    return(
        <div>
            <h1>Digital clock in react js</h1>
            <select onChange={(event)=>setcolor(event.target.value)}>
                <option value={"red"}>Red</option>
                <option value={"blue"}>blue</option>
                <option value={"green"}>green</option>
                <option value={"orange"}>orange</option>
            </select>
            <Clock color={color}/>
        </div>
    )
}

export default Task