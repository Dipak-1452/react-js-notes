import { Routes, Route,NavLink } from "react-router";
import Userlist from "./49userList";
import Adduser from "./49adduser";
import Edituser from "./49edituser";

export default function RoutesandPages() {
    return (
        <div>
            <ul className="nav-list">
                <li>
                    <NavLink to="/">UserList</NavLink>
                </li>
                <li>
                    <NavLink to="/adduser">Adduser</NavLink>
                </li>
            </ul>
            <h1>Make Routes and Pages for add User and User List UI</h1>
            <Routes>
                <Route path="/" element={<Userlist />} />
                <Route path="/adduser" element={<Adduser />} />
                <Route path="/edit/:id" element={<Edituser/>} />
            </Routes>
        </div>
    )
}