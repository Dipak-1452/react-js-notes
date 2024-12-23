import { useId } from "react"

export default function UseId(){
    const id=useId()
    return(
        <div>
            <h1>UseId hook</h1>
            <h1>{id}</h1>
        </div>
    )
}