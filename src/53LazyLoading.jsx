import { lazy, Suspense, useState } from "react"
// import UserData from "./53UserData"
const UserData=lazy(()=>import('./53UserData'))

export default function LazyLoading(){

    const [load,setLoad]=useState(false)
    return(
        <div>
            <h1>Lazy Loading</h1>
            {
                load? <Suspense fallback={<h3>loading...</h3>}><UserData/></Suspense>:null
            }
            <button onClick={()=>setLoad(true)}>Load User</button>
        </div>
    )
}