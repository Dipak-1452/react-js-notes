import useToggle from "./42useToggle"

export default function Custom(){
    const [value,togglevalue]=useToggle(true)
    return (
        <div>
            <button onClick={togglevalue}>toggle heading</button>
            <button onClick={()=>togglevalue(false)}>hide heading</button>
            <button onClick={()=>togglevalue(true)}>show heading</button>

            { 
            value? <h1>custom hooks in react</h1>:null
            }

        </div>
    )
}