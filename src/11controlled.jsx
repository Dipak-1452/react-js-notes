import { useState } from "react"

function Cont(){
    const [name,setname]=useState('');
    const [password,setpassword]=useState('');
    const [email,setemail]=useState('');
    return(
        <div>
            <h1>Controller component</h1>
            {/* <form action="" method="get"> */}
                <input type="text" value={name} onChange={(event)=>setname(event.target.value)} placeholder="Enter Name"/><br /><br />
                <input type="password" value={password} onChange={(event)=>setpassword(event.target.value)} placeholder="Enter password"/><br /><br />
                <input type="text" value={email} onChange={(event)=>setemail(event.target.value)} placeholder="Enter email"/><br /><br />
                <button>submit</button>
                <button onClick={()=>{setname("");setpassword("");setemail("")}}>clear</button>
                <h1>{name}</h1>
                <h1>{password}</h1>
                <h1>{email}</h1>
            {/* </form> */}
        </div>
    )
}

export default Cont


// a controlled component is a form whose input field value is
// controlled by React's state

// Benefits
// single source of truth
// validation and manipulation before submit
// dynamic updates values
