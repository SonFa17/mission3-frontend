import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import "./Header.css";


const Header = () => {
  const [state, setState] = useState([]);

  const onSearch = async (query) => { 
    // e.preventDefault();
    try {
    const results = await axios.post("http://localhost:4000/search-result", {
      query: query,
    })
    console.log(query)
    const data = results.data;
    return setState(data.webPages.value);
 
  } catch (error) {
    console.log(error);
  }
    
  };

  return (
    <div className="main-header-container">
      <div className="container-search-app">
        <h2 className="title-header-search">Search for information here</h2>
        <SearchBar onSearch={onSearch} />
        <div className="result-list">
      {state.map((item) => (
        <div className="result-card" key={item.id}>
        <span><p></p>{item.snippet}</span>
        <br/>
        <a href={item.displayUrl} target="_blank" rel="noopener noreferrer">{item.displayUrl}</a>
        </div>
      ))}
    </div>
        {/* <CardList results={state.results} /> */}
      </div>
    </div>
  );
};

export default Header;