import { useState } from "react"

const useToggle=(defaultval)=>{
    const [value,setvalue]=useState(defaultval)

    function togglevalue(val){
        if(typeof val!='boolean'){
            setvalue(!value)
        }else{
            setvalue(val)
        }
    }
    return [value,togglevalue]
}

export default useToggle