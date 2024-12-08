import { useEffect } from "react"

const Counter = ({ count }) => {
    const handle = () => {
        console.log("handleCounter called")
    }
    useEffect(() => {
        console.log("mounting phase only")
    }, [])
    useEffect(() => {
        console.log("update phase only")
    }, [count])
    useEffect(()=>{
    return()=>{
          console.log("unmounting phase only")
    }
},[])
    return (
        <div>
            <h1>Counter value:{count}</h1>
        </div>
    )
}

export default Counter