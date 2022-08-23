import React from 'react'
import "./SearchBar.css";
import { useState } from "react";



const SearchBar = (props) => {
    const {
        onSearch
    } = props;

    const [search, setSearch] = useState("");

    const handleInput = (e) => {
        const text = e.target.value
        setSearch(text)
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            onSearch(search)
        }
    }



    return (
        <>

            <div className='search-box'>

                <div className='search-container'>
                    <input
                        className='search-bar'
                        placeholder="Enter your question here"
                        type="text"
                        value={search}
                        onChange={handleInput}
                        onKeyPress={handleEnterKeyPressed}
                    />

                    <button className="search-bar-button"
                        type="button" >Search</button>
                </div>
            </div>
        </>

    )
}


export default SearchBar
