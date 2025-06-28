import React, { useContext } from 'react';
import Filter from './../components/Filter';
import ProductCard from './../components/ProductCard';

function Search() {
 

  return (
     
            <div className="search-container">
              <div className="filter-block">
                <Filter />
              </div>
              <div className="product-cards-block">
                
                <ProductCard/>
              </div>
            </div>
    
  )
}

export default Search
