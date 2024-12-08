import UserProfile from "./24userProfile";

function Cssmod(){
    return(
        <div>
            <h1>Style with css module in react js</h1>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
                <UserProfile/>
            </div>
        </div>
    )
}

export default Cssmod