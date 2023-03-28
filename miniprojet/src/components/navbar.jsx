import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="nav">
            <h1>Ons</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li onClick={() => {navigate("/products")}}>Products</li>
                <li><a href="/users">Users</a></li>
            </ul>
        </div>
    )
}

export default Navbar;