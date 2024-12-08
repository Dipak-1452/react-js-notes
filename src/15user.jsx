function Users({data}){
    return(
        <div style={{
            border:"1px solid green",
            padding:"10px",
            margin:"10px",
            width:"400px",
            borderRadius:"10px"
        }}>
            <h1>name:<span style={{color:"green"}}>{data.name}</span></h1>
            <h1>age:<span style={{color:"green"}}>{data.age}</span></h1>
            <h1>email:<span style={{color:"green"}}>{data.email}</span></h1>
        </div>
    )
}

export default Users