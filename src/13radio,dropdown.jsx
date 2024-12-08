import { useState } from "react"

function Rad(){
    const [gender,setgender]=useState('male')
    const [city,setcity]=useState('delhi')
    return(
        <div>
            <h1>handle radio and dropdown button</h1>
            <h1>select gender</h1>
            <input type="radio" checked={gender=='male'} onChange={(event)=>setgender(event.target.value)} name="gender" id="male"value="male"/>
            <label htmlFor="male">male</label>
            <input type="radio" checked={gender=='female'} onChange={(event)=>setgender(event.target.value)} name="gender" id="female" value="female"/>
            <label htmlFor="female">female</label>
            <h1>selected gender:{gender}</h1><br />
            <h1>select city</h1>
            <select onChange={(event)=>setcity(event.target.value)} defaultValue={"delhi"}>
                <option value="noida">Noida</option>
                <option value="delhi">delhi</option>
                <option value="chennai">chennai</option>
            </select>
            <h1>selected city:{city}</h1>
        </div>
    )
}

export default Rad