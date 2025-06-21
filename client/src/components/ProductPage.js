import React, {useContext} from 'react'
import CardContext from '../components/CardContext';
import './ProductPage.css'
import photosProduct from'./img/photos_product.png'
import { useParams } from 'react-router-dom';


function ProductPage() {

  const { productId } = useParams();
  const { cards } = useContext(CardContext);
  console.log("Received productId:", productId);

  const currentCard = cards.find((card) => Number(productId) === card.id);

  if (!currentCard) {
    return <div>Продукт не найден!</div>;
  } 

  return (
    
    <div>
    <div className='product-container'>
      
        <div className='photo'>  
            <img src={photosProduct}></img> 
        </div>
        <div className='product-box'>
            <h1>{currentCard.category} {currentCard.title}, {currentCard.color} </h1>
            <p className='id-product'>Код товара: {currentCard.id}</p>
            <div className='price-container'>
              <p className='price'>{currentCard.price} ₽</p>
              <button className='btn-price'>В КОРЗИНУ</button>
            </div>
            <div className='size'>
                <div className='btn-size-container'>
                <p>Размер:</p>
                  <button>74</button>
                  <button>75</button>
                  <button>76</button>
                </div>               
            </div>
            <hr/>
            <div className='delivery-blocks'>
              <div className='delivery'>
                <button className='btn-delivery'></button>
                <div className='delivery-text'>
                  <h2>Доставка в Краснодар</h2>
                  <p>Самовывоз — бесплатно</p>
                </div>
              </div>
              <div className='pickup'>
                <button className='btn-pickup'></button>
                <div className='pickup-text'>
                  <h2>Самовывоз сегодня - бесплатно</h2>
                  <p>Доставка завтра - 370 ₽</p>
                </div>
              </div>
            </div>
            <span>Цена действительна только для интернет-магазина и может отличаться от цен в розничных магазинах</span>
        </div>
    </div>
    </div>
    
  )
}

export default ProductPage
