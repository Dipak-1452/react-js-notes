function Loo(){
    const username=["hari","ram","dina","jpk","jj"]
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
            <h1>Loop in jsx with map function</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userdata.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
            <h1>dummy data</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>anil</td>
                        <td>ee@gg</td>
                        <td>23</td>
                    </tr> 
                </tbody>
            </table>
        </div>
    )
}

export default Loo