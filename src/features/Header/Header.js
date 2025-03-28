import React from "react";
import "./Header.css";

function Header() {
    return (
    <header>
        <form>
            <input tpye="text"
                placeholder="Search"
                aria-label="Search posts" />
            <button type="submit" aria-label="Search">Search</button>
        </form>       
    </header>
    );
};

export default Header;