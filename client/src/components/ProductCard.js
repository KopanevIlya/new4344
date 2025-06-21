import React, {useContext} from 'react';
import CardContext from '../components/CardContext';

import './ProductCard.css'
import { Link } from 'react-router-dom';

function ProductCard() {
  const { cards } = useContext(CardContext);
  return (
    <div className='wrapper-cards'>
    {cards.map(card=>(
    <div key={card.id} className='product-card-container'>
        <Link to='/product'>
            <div className='img-container'>
                <span className='isAvailability'>В наличии </span>
                <img src={`/img/${card.img}`}/>
            </div>
        </Link>
        <div className='info-product-container'>
          <div className='product'>
              <span>{card.category}</span><br/>
              <span>{card.title}</span>
              <span>, {card.color}</span>
          </div>
        <span>{card.price} ₽/шт</span>
        <button className='in-basket'>В КОРЗИНУ</button>
        </div>
    </div>
  ))}
  </div>
  )
}

export default ProductCard
