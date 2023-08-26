
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // You might need to install the react-icons library

const Searchbar = ({ onSearch ,setData}) => {
  const [searchTerm, setSearchTerm] = useState('');
 
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


 
  const handleSearch =async () => {
    if (onSearch) {

    
 

      onSearch(searchTerm);
    }
  };

  return (
<>
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <FaSearch className="search-icon" onClick={handleSearch} />
    </div>
   
       <button  className='btn btn-primary connect-btn '>Connect</button>

       </>
  );
};

export default Searchbar;
