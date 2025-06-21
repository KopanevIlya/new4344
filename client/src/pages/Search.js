import React, { useContext } from 'react';
import { CardProvider } from './../components/CardContext';
// import CardContext from '../components/CardContext';
import Filter from './../components/Filter';
// import Product from './../components/Product';
import ProductCard from './../components/ProductCard';

function Search() {
  // const { cards } = useContext(CardContext);
  // console.log(cards)
  // const productCards = cards?.map(card => <ProductCard key={card.id} {...card} />) ?? [];

  return (
    <CardProvider>
            <div className="search-container">
              <div className="filter-block">
                <Filter />
              </div>
              <div className="product-cards-block">
                {/* {productCards} */}
                <ProductCard/>
              </div>
            </div>
    </CardProvider>
  )
}

export default Search
