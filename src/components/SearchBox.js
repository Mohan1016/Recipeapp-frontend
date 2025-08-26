import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className="d-flex justify-content-center">
      <input
        type="text"
        className="form-control w-50 me-2"
        placeholder="Search Dishes"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-warning" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
