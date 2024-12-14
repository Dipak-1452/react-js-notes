import Userr from "./29user"

function Pas(){
    const displayName=(name)=>{
        alert(name)
    }
    return(
        <div>
            <h1>call parent component function from child component</h1>
            <Userr displayName={displayName } name="anil"/>
            <Userr displayName={displayName} name="sim"/>
        </div>
    )
}

export default Pas