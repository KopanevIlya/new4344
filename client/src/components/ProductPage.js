import React, {useContext} from 'react'
import CardContext from '../components/CardContext';
import './ProductPage.css'
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
    
    <div className='product-container'>
      <div className='product-block-1'>
        <div className='photo'>  
            <img src={`/img/${currentCard.img}`}></img> 
        </div>
        <div className='product-box'>
            <h1>{currentCard.category} {currentCard.title}, {currentCard.color} </h1>
            <p className='id-product'>Код товара: {currentCard.id}</p>
            <div className='price-container'>
              <p className='price'>{currentCard.price} ₽</p>
              <button className='btn-in-basket'>В КОРЗИНУ</button>
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
      <div className='product-block-2'>
        <div className='product-description'>
          <h1>Описание</h1>
          <p>Боди-майка из мягчайшего интерлока. Прекрасный вариант для жаркого лета.</p>
          <p>Кнопки расположены на плечиках и между ножками, что позволяет быстро переодеть малыша или сменить подгузник.</p>
          <p>Состав: {currentCard.structure}</p>
        </div>
        <div className='product-reviews'>
          <h1>Отзывы</h1>
          <p>У данного товара нет отзывов. Станьте первым, кто оставил отзыв об этом товаре!</p>
          <button className='btn-reviews'>ОСТАВИТЬ ОТЗЫВ</button>
        </div>
    </div>
  </div>
    
  )
}

export default ProductPage
