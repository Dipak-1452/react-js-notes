import { act, useReducer } from "react"

const emptyData = {
    name: '',
    age: '',
    email: '',
    city: '',
    address: ''
}

const reducer=(data,action)=>{
    return {...data,[action.type]:action.val}
}

export default function UseReducer() {

    const [state,dispatch]=useReducer(reducer,emptyData)

    return (
        <div>
            <h1>useReducer hook</h1>
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"name"})} placeholder="enter ur name" /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"age"})} placeholder="enter ur age" /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"email"})} placeholder="enter ur email" /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"city"})} placeholder="enter ur city" /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:"address"})} placeholder="enter ur address" /><br />
            <button>Add Details</button>

            <ul>
                <li>Name:{state.name}</li>
                <li>Age:{state.age}</li>
                <li>Email:{state.email}</li>
                <li>City:{state.city}</li>
                <li>Address:{state.address}</li>
            </ul>
        </div>
    )
}