import React, { useState } from 'react'
import './Catalogs.css'
import Basket from '../components/Basket'

function Catalogs() {


  const[stateCounter, setStateCounter] = useState(0)


  return (
    <div >

        <div className='basket'>

          <div>
          <span>Корзина</span>
          <span>Удалить все</span>
          </div>
          <div>СКАЧАТЬ ФАЙЛОМ</div>

        </div>

        <div className='line-block'>

              <p className='text'>Главная - Корзина</p>

        </div>


        <div className='isAvailability'>В наличии </div>


        <div className='containerItemBasket'>

        <div>
          <div className='itemBasket'>

         
          <div className='selected'>

          <input type='checkbox' className='check' />


          <img src='./img/itemBasket.png'/>

          </div>
          


          <div className='infoItem'>


            <p className='typeItem'>Товар:</p>
            <p className='titleItem'>Боди без рукавов "ФРУК-ТИК", розовый</p>
            <span className='saleItem'>Скидка: 20%</span>
            <span className='sizeItem'>Размер: 74</span>


          </div>

          <div className='priceItem'>

              <p className='titlePrice'>Цена:</p>
              <p className='price'>349₽</p>
              <p className='salePrice'>500₽</p>


          </div>

          <div className='aviab'>

            <p className='titleAviab'>Колл-во:</p>

            <div className='containerButton'>

              <div className='minus' onClick={() => setStateCounter(stateCounter-1)}>-</div>
              <span className='score'>{stateCounter}</span>
              <div className='plus' onClick={() => setStateCounter(stateCounter+1)}>+</div>

            </div>

          

          </div>

           <div className='totalBasket'>

              <p className='titleTotal'>В сумме:</p>
              <p className='totalSumm'>2 332₽</p>
              <p className='totalSale'>3 312₽</p>
              <p className='totalSales'>Экономия 1 370 ₽</p>

            </div>


        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="deleteItem" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>

        </div>

        <div className='itemBasket'>

         
          <div className='selected'>

          <input type='checkbox' className='check' />


          <img src='./img/itemBasket.png'/>

          </div>
          


          <div className='infoItem'>


            <p className='typeItem'>Товар:</p>
            <p className='titleItem'>Боди без рукавов "ФРУК-ТИК", розовый</p>
            <span className='saleItem'>Скидка: 20%</span>
            <span className='sizeItem'>Размер: 74</span>


          </div>

          <div className='priceItem'>

              <p className='titlePrice'>Цена:</p>
              <p className='price'>349₽</p>
              <p className='salePrice'>500₽</p>


          </div>

          <div className='aviab'>

            <p className='titleAviab'>Колл-во:</p>

            <div className='containerButton'>

              <div className='minus' onClick={() => setStateCounter(stateCounter-1)}>-</div>
              <span className='score'>{stateCounter}</span>
              <div className='plus' onClick={() => setStateCounter(stateCounter+1)}>+</div>

            </div>

          

          </div>

           <div className='totalBasket'>

              <p className='titleTotal'>В сумме:</p>
              <p className='totalSumm'>2 332₽</p>
              <p className='totalSale'>3 312₽</p>
              <p className='totalSales'>Экономия 1 370 ₽</p>

            </div>


        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="deleteItem" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>

        </div>

        <div className='itemBasket'>

         
          <div className='selected'>

          <input type='checkbox' className='check' />


          <img src='./img/itemBasket.png'/>

          </div>
          


          <div className='infoItem'>


            <p className='typeItem'>Товар:</p>
            <p className='titleItem'>Боди без рукавов "ФРУК-ТИК", розовый</p>
            <span className='saleItem'>Скидка: 20%</span>
            <span className='sizeItem'>Размер: 74</span>


          </div>

          <div className='priceItem'>

              <p className='titlePrice'>Цена:</p>
              <p className='price'>349₽</p>
              <p className='salePrice'>500₽</p>


          </div>

          <div className='aviab'>

            <p className='titleAviab'>Колл-во:</p>

            <div className='containerButton'>

              <div className='minus' onClick={() => setStateCounter(stateCounter-1)}>-</div>
              <span className='score'>{stateCounter}</span>
              <div className='plus' onClick={() => setStateCounter(stateCounter+1)}>+</div>

            </div>

          

          </div>

           <div className='totalBasket'>

              <p className='titleTotal'>В сумме:</p>
              <p className='totalSumm'>2 332₽</p>
              <p className='totalSale'>3 312₽</p>
              <p className='totalSales'>Экономия 1 370 ₽</p>

            </div>


        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="deleteItem" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>

        </div>

        



        </div>
        


        <div>


          <div className='totalInfo'>

              <p className='totalPrice'>Итого:</p>
              <p className='totalWeight'>Общий вес корзины: 5кг</p>
              <p className='totalEconom'>Экономия 2 370 ₽</p>
              <p className='totalPay'>К оплате: 4 664₽</p>
              <p className='enterPromo'>Ввести промокод</p>

              <button className='offer'>оформить заказ</button><br/>
              <button className='fastOffer'>быстрый заказ</button>


          </div>

          </div>




        </div>
        

        

        

        <div>

        </div>
      <Basket/>
    </div>
  )
}

export default Catalogs
