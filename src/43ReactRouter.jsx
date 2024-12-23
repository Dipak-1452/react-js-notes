import { Routes ,Route, Link, Navigate} from "react-router";
import Hom from "./43home";
import Abo from "./43about";
import Page from "./44pagenotfound";


export default function Rou(){
    return (
        <div>
            <h1>React Router</h1>
            <Link to='/43home'>Home page</Link><br />
            <Link to='/43about'>About page</Link>
            <Routes>
                <Route path='/43home' element={<Hom/>}/>
                <Route path='/43about' element={<Abo/>}/>
                {/* <Route path='/*' element={<Page/>} /> */}
                <Route path="/*" element={<Navigate to='/43home'/>}/>

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