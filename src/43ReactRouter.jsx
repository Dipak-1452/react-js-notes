import { Routes, Route, Navigate } from "react-router";
import Hom from "./43home";
import Abo from "./43about";
import Page from "./44pagenotfound";
import College from "./45college";
import Stude from "./45student";
import Dep from "./45department";
import Detail from "./45details";
import NavBar from "./43navbar";
import Log from "./43login";
import User from "./46User";
import UserDetail from "./46UserDetails";


export default function Rou() {
    return (
        <div>
            {/* <NavBar/> */}
            <Routes>
                <Route element={<NavBar />}>
                    <Route path='/home' element={<Hom />} />
                    <Route path="/userlist/list?" element={<User/>}/>
                    {/* <Route path="/userlist/list" element={<User/>}/> */}

                    <Route path="/userlist/:id/:name?" element={<UserDetail/>}/>
                    {/* <Route path="/userlist/:id/:name" element={<UserDetail/>}/> */}

                    <Route path="/user"> 
                        <Route path='/user/about' element={<Abo />} />
                        <Route path='/user/login' element={<Log />} />
                    </Route>
                </Route>
                <Route path="/college" element={<College />}>
                    <Route index element={<Stude />} />
                    <Route path='department' element={<Dep />} />
                    <Route path='details' element={<Detail />} />
                </Route>
                {/* <Route path='/*' element={<Page/>} /> */}
                <Route path="/*" element={<Navigate to='/home' />} />

            </Routes>
        </div>
    )
}

// BrowserRouter: this component enables client-side routing using the
// browser's history API
// Routes: its responsible for rendering the appropriate component based on the current UPL
// Route:Each Route component defines a path and the corresponding component
// to render when that path is matched
// Link: A link for navigate from 1 page to other page