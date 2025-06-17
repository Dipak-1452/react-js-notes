import { NavLink, Outlet,Link} from "react-router";

export default function College(){
    return(
        <>
        <h1>College page</h1>
        <h3><Link to="/">go back to home</Link></h3>
        <NavLink to="" style={{margin:'10px'}}>Student</NavLink>
        <NavLink to="department" style={{margin:'10px'}}> Departments</NavLink>
        <NavLink to="details" style={{margin:'10px'}}> College details</NavLink>
        <Outlet/>
        </>
    )
}