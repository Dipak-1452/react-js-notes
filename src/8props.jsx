import { useState } from "react"
import User, { Student, User2,User3, User4,User5} from "./8props2"

function Pro(){
    let username="joker"
    let age=20
    let userobject={
        name:"you",
        age:23,
        email:"a@g.com"
    }
    let userobject2={
        name:"i",
        age:22,
        email:"a@g.com"
    }
    let names=["hari","ram","fit"]
    const [student,setstudent]=useState()
    return(
        <div>
            <h1>Props in react js</h1><hr />
            <User name="dipak" age={17} /><hr />
            <User2 name={username} age={age}/><hr />
            <User3 user={userobject}/><hr />
            <User3 user={userobject2}/><hr />
            <User4 name={names[1]}/><hr />
            {student && <Student name={student}/>}
            <button onClick={()=>setstudent("baskar")}>Update student name</button><hr />
            <User5 name="firas"/>
            <User5/>
        </div>
    )
}

export default Pro


// React components use props to communicate with each other.
// Every parent component can pass some information to its child components by giving them props.

// Conditional Rendering
// Your components will often need to display different things depending on different conditions.
//  In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

// A JavaScript && expression returns the value of its right side (in our case, the checkmark) if the left side (our condition) is true.
//  But if the condition is false, the whole expression becomes false.
//  React considers false as a “hole” in the JSX tree, just like null or undefined,
//  and doesn’t render anything in its place.