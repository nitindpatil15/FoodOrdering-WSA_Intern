import React from "react";
import {FaSearch} from 'react-icons/fa'

const Search = () => {
  return (
    <form>
      <div className="input-group">
        <input type="text" placeholder="Search Your Faviourate Restaurant..." name="" id="search_field" className="form-control" />
        <div className="input-group-append">
        <button id="search_btn" className="btn"><FaSearch className="fa fa-search"/></button>
        </div>
      </div>
    </form>
  );
};

export default Search;
