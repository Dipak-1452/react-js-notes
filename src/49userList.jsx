import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Userlist = () => {

    const [userdata, setuserdata] = useState([]);
    const [loading, setLoading] = useState(false)

    const navigate=useNavigate();

    useEffect(() => {
        setLoading(true)
        getUsersData()
    }, [])

    const handleDeleteUser=async(id)=>{
        const url = "http://localhost:3000/users";
        let response = await fetch(url+"/"+id,{
            method:'delete'
        })
        response = await response.json();
        getUsersData()
    }

    const handleEditUser=(id)=>{
        navigate("/edit/"+id)

    }

    const getUsersData = async () => {
        const url = "http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json();
        setuserdata(response)
        setLoading(false)
    }
    return (
        <div>
            {
                !loading ?
                    userdata.map((user) => (
                        <ul key={user.id}>
                            <li>{user.username}</li>
                            <li>{user.age}</li>
                            <li>{user.email}</li>
                            <li><button onClick={()=>handleDeleteUser(user.id)}>Delete</button></li>
                            <li><button onClick={()=>handleEditUser(user.id)}>Edit</button></li>

                        </ul>
                    ))
                    : <h1>Data Loading...</h1>
            }
        </div>
    )
}

export default Userlist