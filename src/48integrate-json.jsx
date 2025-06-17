import { useEffect, useState } from "react";

const Integrate = () => {

    const [userdata, setuserdata] = useState([]);
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        setLoading(true)
        getUsersData()
    }, [])

    const getUsersData = async () => {
        const url = "http://localhost:3000/posts";
        let response = await fetch(url);
        response = await response.json();
        setuserdata(response)
        setLoading(false)
    }
    return (
        <div>
            <h1>Integrate JSON server API and Loader</h1>
            {
                !loading?
                userdata.map((user) => (
                    <h1 key={user.name}>{user.name}</h1>
                ))
                :<h1>Data Loading...</h1>
            }
        </div>
    )
}

export default Integrate 