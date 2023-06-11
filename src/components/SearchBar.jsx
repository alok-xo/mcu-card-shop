import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/SearchBar.css";

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState();

  const fetchData = (value) => {
    fetch("http://127.0.0.1:5566/character")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((character) => {
          return (
            value &&
            character &&
            character.name &&
            character.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <SearchIcon />
      <input
        placeholder="Type to search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

// export default SearchBar;
