const College=({college})=>{
    return(
        <div style={{backgroundColor:"#ccc",
            padding:"20px",
            borderBottom:"2px solid #000",
            margin:'20px',
            borderRadius:"10px"
        }}>
            <h1>Name:{college.name}</h1>
                        <ul>
                            <li><h1>city:{college.city}</h1></li>
                            <li><h1>website:{college.website}</h1></li>
                            <li>
                            <h1>student:</h1>
                                {
                                    college.student.map((student)=>(
                                        <div>
                                            <ul>
                                                <li>name:{student.name}</li>
                                                <li>age:{student.age}</li>
                                                <li>email:{student.email}</li>
                                            </ul>
                                        </div>
                                    ))
                                }
                            </li>
                        </ul>
        </div>
    )
}

export default College