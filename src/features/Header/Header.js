import React, { useState, useEffect} from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/redditSlice";
import Subreddits from "../Subreddits/Subreddits";

function Header() {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };
    //console.log(searchTermLocal); //Logging local state to ensure its working
    
    useEffect(() => {
        setSearchTermLocal(searchTerm);
    }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    };

    return (
    <header>
        <form onSubmit={onSearchTermSubmit}>
            <Subreddits/>
            <input className="SearchInput" type="text"
                value={searchTermLocal}
                onChange={onSearchTermChange}
                placeholder="Search Posts"
                aria-label="Search posts" />
            <button className="Search" type="submit" aria-label="Search">Search</button>
        </form>       
    </header>
    );
};

export default Header;