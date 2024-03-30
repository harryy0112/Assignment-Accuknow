import React, { useState } from "react";

const Search = ({ colors }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const results = colors.filter((color) =>
      color.color.toLowerCase().includes(term)
    );
    setSearchResults(results);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search colors"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <ul className="color-list">
        {searchResults.map((color, index) => (
          <li key={index} className="color-item">
            <div
              className="color-box"
              style={{ backgroundColor: color.value }}
            ></div>
            <span>{color.color}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
