import Users from "./15user"


function Loop(){
    const userdata=[
        {
            name:"anil",
            age:23,
            email:"ee@gg",
            id:1
        },
        {
            name:"hal",
            age:25,
            email:"he@gg",
            id:2
        }
    ]
    return(
        <div>
            <h1>Reuse component in loop</h1>
            {
                userdata.map((user)=>(
                    <div key={user.id}>
                         <Users data={user}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Loop