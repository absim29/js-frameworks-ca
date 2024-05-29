import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const url = 'https://v2.api.noroff.dev/online-shop';

const SearchBar = () => {
  const {data, isLoading, isError} = useFetch(url);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-wrapper">
      <div className="input-wrapper"> 
        <FontAwesomeIcon icon={faSearch} id="search"/>
        <input 
        type="text" 
        placeholder="Type to search..." 
        value={searchQuery} 
        onChange={(e)=> setSearchQuery(e.target.value)}/>
      </div>

      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data</div>}
      {searchQuery && (
      <div className="results-list">
        {filteredData.map((item) => (
        <div key={item.id}>
        <Link to={`/post/${item.id}`}>{item.title}</Link></div>
      ))}
      </div>
      )}
    </div>
  );
};

export default SearchBar;