// Dynamic Routes
import { Link } from "react-router"

export default function User(){
    const userData=[
        {id:1,name:'Anil'},
        {id:2,name:'Ram'},
        {id:3,name:'hari'},
        {id:4,name:'bala'},
        {id:5,name:'can'},
    ]
    return(
        <div>
        <h1>User list page</h1>
        {
            userData.map((item)=>(
                <div>
                    <h4><Link to={'/userlist/'+ item.id}>{item.name}</Link></h4>
                </div>
            ))
        }
        <h1>User list page with name</h1>
        {
            userData.map((item)=>(
                <div>
                    <h4><Link to={'/userlist/'+ item.id+"/"+item.name}>{item.name}</Link></h4>
                </div>
            ))
        }
        </div>
        )
}