import React from 'react'
// import "./Header.css";
import { useState } from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";
import InfoSource from "../api/InfoSource";
import './Header.css';


const Header = () => {
  
  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const results = await InfoSource.get("/", {
      params: { s: text, i: "tt3896198", apiKey: "c4332283" },
      // params: { s: text, i: "process.env.REACT_APP_I", apiKey: "process.env.REACT_APP_apiKey" },
    });

    setState(prevState => {
      return { ...prevState, results: results }
    })
  };

  return (
    <div className="main-header-container">
      <div className="container-search-app">
        <h2 className="title-header-search">
          Search for the information here
        </h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
}

export default Header;

