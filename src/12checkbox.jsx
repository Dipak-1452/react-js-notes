import { useState } from "react"

function Check(){
    const [skills,setskills]=useState([])
    const handleskills=(event)=>{
        if(event.target.checked){
            setskills([...skills,event.target.value])
            // ...(spread operator)
        }else{
            setskills([...skills.filter((item)=>item!=event.target.value)])
            // filter function
        }

    }
    return(
        <div>
            <h1>handle checkbox</h1>
            <h2>select your skills</h2>
            <input onChange={handleskills} type="checkbox" id="php" value="php"/>
            <label htmlFor="php">php</label><br />

            <input onChange={handleskills} type="checkbox" id="python" value="python"/>
            <label htmlFor="python">python</label><br />

            <input onChange={handleskills} type="checkbox" id="cpp"  value="cpp"/>
            <label htmlFor="cpp">cpp</label><br />
            <h1>{skills.toString()}</h1>
        </div>
    )
}

export default Check