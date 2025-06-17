import { Link, Outlet } from "react-router";

export default function NavBar() {
    return (
        <>
            <div style={{display:'flex',flexDirection:'row'}}>
                <Link to='/home' style={{margin:'10px'}}>Home page</Link><br />
                <Link to='/user/about' style={{margin:'10px'}}>About page</Link><br />
                <Link to='/user/login' style={{margin:'10px'}}>login</Link>
                <Link to='/college' style={{margin:'10px'}}>College</Link>
                <Link to='/userlist' style={{margin:'10px'}}>User</Link>
                <Link to='/userlist/list' style={{margin:'10px'}}>List</Link>
                <Outlet/>
            </div>
        </>
    )
}