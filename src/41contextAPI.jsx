import { useState } from "react";
import Colle from "./41college";
import { SubjectContext } from "./41contextdata";

export default function ConAPI(){
    const [subject,setsubject]=useState("")
    return(
        <div style={{backgroundColor:"red", padding:10}}>
            <SubjectContext.Provider value={subject}>
                <select value={subject} onChange={(event)=>setsubject(event.target.value)}>
                    <option value=''>select subjext</option>
                    <option value="science">science</option>
                    <option value="social">social</option>
                    <option value="cs">cs</option>
                    <option value="language">language</option>
                </select>
            <h1>Context API</h1>
            <button onClick={()=>setsubject("")}>clear</button>
            <Colle/>
            </SubjectContext.Provider>
        </div>
    )
}