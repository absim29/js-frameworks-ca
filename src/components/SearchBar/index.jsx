import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const url = 'https://v2.api.noroff.dev/online-shop';

const SearchBar = () => {
  const { data, isLoading, isError } = useFetch(url);
  const [searchQuery, setSearchQuery] = useState("");
  const searchWrapperRef = useRef(null);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLinkClick = () => {
    setSearchQuery("");
  };

  const handleClickOutside = (event) => {
    if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
      setSearchQuery("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-wrapper" ref={searchWrapperRef}>
      <div className="input-wrapper">
        <FontAwesomeIcon icon={faSearch} id="search" />
        <input
          type="text"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data</div>}
      {searchQuery && (
        <div className="results-list">
          {filteredData.map((item) => (
            <div key={item.id}>
              <Link to={`/post/${item.id}`} onClick={handleLinkClick}>
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
