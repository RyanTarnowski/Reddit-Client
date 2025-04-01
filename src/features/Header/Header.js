import React, { useState, useEffect} from "react";
import "./Header.css";

function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };


    //console.log(searchTerm); //Logging local state to ensure its working

    return (
    <header>
        <form>
            <input tpye="text"
                value={searchTerm}
                onChange={onSearchTermChange}
                placeholder="Search"
                aria-label="Search posts" />
            <button type="submit" aria-label="Search">Search</button>
        </form>       
    </header>
    );
};

export default Header;