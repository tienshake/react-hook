import './Nav.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from "react-router-dom";
const Nav = () => {

    return (
        <div className="topnav">
            <NavLink active="active" to="/">Home</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </div >
    );
}

export default Nav;