import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from "../store/searchTermSlice";

export const SearchBar = () => {
  const [ searchTermLocal, setSearchTermLocal ] = useState("");
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setSearchTerm(searchTermLocal))
  }, [searchTermLocal, dispatch])

  const handleChange = (e) => {
    setSearchTermLocal(e.target.value)
  }

  return (
    
      <div id="searchbar-container">
        <span className="material-symbols-outlined">
        search
        </span>
        <form>
        <input 
          type='text'
          value={searchTerm}
          onChange={handleChange}
          placeholder='Search Post'
        />
        </form>
      </div>
      
    
  )
}