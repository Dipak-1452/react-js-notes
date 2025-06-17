import { Link, useParams } from "react-router"

export default function UserDetail(){

    const paramsData=useParams();
    return(
        <div>
            <h1>User detail page</h1>
            <h2>User id is:{paramsData.id}</h2>
            <h3><Link to="/userlist">Back</Link></h3>
        </div>
    )
}