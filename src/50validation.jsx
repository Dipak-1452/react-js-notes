import { useState } from "react"

function Validation(){

    const [username,setUsername]=useState('')
    const [nameErr,setNameErr]=useState('')
    const [password,setPassword]=useState('')
    const [passwordErr,setPasswordErr]=useState('')

    const handleName=(event)=>{
        if(event.target.value.length>5){
            setNameErr("Please enter valid username.only 5 characters allowed")
        }else{
            setNameErr("")
        }
    }

    const handlePassword=(event)=>{
        let regex= /^[A-Z0-9]+$/i;
        if(!regex.test(event.target.value)){
            setPasswordErr("Please enter valid password.only alphanumeric characters allowed")
        }else{
            setPasswordErr("")
        }
    }

    return(
        <div>
            <h1>Simple validation on input fields</h1>

            <input type="text" onChange={handleName} placeholder="enter name"/>
            <span>{nameErr && nameErr}</span><br />
            <input type="text" onChange={handlePassword} placeholder="enter password"/>
            <span>{passwordErr && passwordErr}</span><br />
            <button disabled={nameErr || passwordErr}>login</button>
        </div>
    )
}

export default Validation