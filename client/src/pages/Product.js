import React from 'react'
import ProductPage from './../components/ProductPage';
import { CardProvider } from './../components/CardContext';
import { useParams  } from 'react-router-dom';
import Filter from '../components/Filter';

function Product() {

  const { productId } = useParams();

  return (
    <div>
        
       
        {/* <Filter/> */}
      
    </div>
  )
}

export default Product
