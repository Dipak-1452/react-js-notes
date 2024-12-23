import { useState } from "react"

export default function UpArr(){
    // const [name,setnmae]=useState("Anil")
    const [data,setdata]=useState([
        'anil','sam','hari'
    ])
    const [datadetails,setdatadetails]=useState([
        {name:'anil',age:'29'},
        {name:'sam',age:'25'},
        {name:'avi',age:'9'}
    ])
    const handleUser=(name)=>{
        data[data.length-1]=name;
        setdata([...data])

    }
    const handleage=(age)=>{
        datadetails[datadetails.length-1].age=age;
        setdatadetails([...datadetails])

    }


    return(
        <div>
            <h1>Updating Array in State</h1>
            <input type="text" placeholder="enter ur name" onChange={(event)=>handleUser(event.target.value)}/>
            {/* <h2>{name}</h2> */}
            {/* <button onClick={()=>setnmae("hari")}>update</button> */}
            {data.map((item,index)=>(
                <h3 key={index}>{item}</h3>
            ))}
            <input type="text" placeholder="enter ur age" onChange={(event)=>handleage(event.target.value)}/>
            {
                datadetails.map((item,index)=>(
                    <h1 key={index}>{item.name},{item.age}</h1>
                ))
            }
        </div>
    )
}