import React from 'react';
import SearchName from "../SearchName";
import 'bootstrap/dist/css/bootstrap.min.css';


import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="search-area col-4">
        <SearchName />
    </div>
</nav>
    );
}
export default Nav;