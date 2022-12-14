import React from "react";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = (props) => {
  const { onSearch } = props;

  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setSearch(text);
  };

  const handleOnClick = () => {
    onSearch(search);
    const string = search;
    const newString = string.replace(/[^\w\s]|_/g, " ");
    // console.log(newString);
    setSearch(newString);
    return newString;
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };
  return (

      <div className="search-box">
        <div className="search-container">
          <input
            className="search-bar"
            placeholder="Enter your question here"
            type="text"
            value={search}
            onChange={handleInput}
            onKeyPress={handleEnterKeyPress}
          />

          <button
            onClick={handleOnClick}
            className="search-bar-button"
            type="button"
          >
            Search
          </button>
        </div>
      </div>

  );
};

export default SearchBar;
