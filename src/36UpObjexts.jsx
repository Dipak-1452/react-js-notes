import { useState } from "react"


function UpOb(){
    const [data,setdata]=useState({
        name:'anil',
        age:13,
        address:{
            city:'Delhi',
            country:'India'
        }
    })
    const handleName=(name)=>{
        data.name=name
        setdata({...data})
    }
    const handlecity=(city)=>{
        data.address.city=city
        setdata({...data})
    }
    return(
        <div>
            <h1>updating objects in state</h1>
            <input type="text" placeholder="update name" onChange={(event)=>handleName(event.target.value)}/>
            <input type="text" placeholder="update city" onChange={(event)=>handlecity(event.target.value)}/>
            <h2>name:{data.name}</h2>
            <h2>age:{data.age}</h2>
            <h2>city:{data.address.city}</h2>
            <h2>country:{data.address.country}</h2>
        </div>
    )
}

export default UpOb