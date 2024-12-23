import { useContext } from "react";
import { SubjectContext } from "./41contextdata";

export default function Subj(){
    const subject=useContext(SubjectContext)
    return(
        <div style={{backgroundColor:'pink', padding:10}}>
            <h1>subject component</h1>
            <h1>the subject is {subject}</h1>
        </div>
    )
}