import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './Header.css'
import axios from 'axios'


function Header() {

  const[searchCart, setSearchItem] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const[stateBlock, setStateBlock] = useState(false);


  const searchItem = async(e) =>{


    const value = e.target.value
    setSearchItem(value)
    setStateBlock(true)

    try{
       const res = await axios.get('http://localhost:4444/items', {
        params:{data:value}
       });
       console.log(res.data)
       setSearchResults(res.data)
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      
      <div className='high-block'>

        <div className='contact-data'>

          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
          <p className='adress'>г. Москва, Электролитный проезд 3Б стр 6</p>



          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
          <p className='number'>+7 916 361-30-00</p>


        </div>
        

        <ul className='list-wrapp'>

          <li className='itemWrapp link'><Link to="/catalog">Каталог</Link>
            
             <div className='modalBlock'>

    
            <ul className='listModal'>

              <li className='itemModal first'>ОДЕЖДА</li>
              <li className='itemModal second'>Изделия из муслина</li>
              <li className='itemModal'>Боди</li>
              <li className='itemModal'>Песочники</li>
              <li className='itemModal'>Нательные комбинезоны (слипы)</li>
              <li className='itemModal'>Комбинезоны из футера</li>
              <li className='itemModal'>Комбинезоны вязаные</li>
              <li className='itemModal'>Демисезонные комбинезоны</li>
              <li className='itemModal'>Комбинезоны-трансформеры</li>
              <li className='itemModal'>Головные уборы</li>
              <li className='itemModal'>Носочки</li>
              <li className='itemModal'>Нагрудники</li>

            </ul>

            <ul className='listModal'>

              <li className='itemModal first'>ОДЕЖДА</li>
              <li className='itemModal second'>Изделия из муслина</li>
              <li className='itemModal'>Боди</li>
              <li className='itemModal'>Песочники</li>
              <li className='itemModal'>Нательные комбинезоны (слипы)</li>
              

            </ul>


            <ul className='listModal'>

              <li className='itemModal first'>ОДЕЖДА</li>
              <li className='itemModal second'>Изделия из муслина</li>
              <li className='itemModal'>Боди</li>
              <li className='itemModal'>Песочники</li>
              

            </ul>


            <ul className='listModal'>

              <li className='itemModal first'>ОДЕЖДА</li>
              <li className='itemModal second'>Изделия из муслина</li>
              <li className='itemModal'>Боди</li>
              <li className='itemModal'>Песочники</li>
              <li className='itemModal'>Нательные комбинезоны (слипы)</li>
              <li className='itemModal'>Комбинезоны из футера</li>
              


            </ul>


            <ul className='listModal'>

              <li className='itemModal first'>ОДЕЖДА</li>
              <li className='itemModal second'>Изделия из муслина</li>
              <li className='itemModal'>Боди</li>
              <li className='itemModal'>Песочники</li>
              <li className='itemModal'>Нательные комбинезоны (слипы)</li>
              <li className='itemModal'>Комбинезоны из футера</li>
              <li className='itemModal'>Комбинезоны вязаные</li>
              <li className='itemModal'>Демисезонные комбинезоны</li>
              <li className='itemModal'>Комбинезоны-трансформеры</li>
              <li className='itemModal'>Головные уборы</li>
              <li className='itemModal'>Носочки</li>
              <li className='itemModal'>Нагрудники</li>

            </ul>

        </div>
          </li>

          <li className='itemWrapp'>Главная</li>

          <li className='itemWrapp'>Как купить</li>

          <li className='itemWrapp'>Доставка</li>

          <li className='itemWrapp'>О компании</li>

          <li className='itemWrapp'>Мы в instagram</li>

          <li className='itemWrapp'>Акции</li>

        </ul>

        

      </div>

     
       
      <div className='down-block'>
        

        <img src="/logo.png" alt='Image'/>

        <div className='inputs'>
          <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="26" fill="currentColor" class="bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
          <input type='text' placeholder='Начните писать' value={searchCart} onChange={searchItem} className='input-search'/>
          

          <button className='button'>НАЙТИ</button>

          {
           searchCart && (
             stateBlock && (<div className='bg'>
              <svg xmlns="http://www.w3.org/2000/svg"onClick={() => setStateBlock(false)} width="24" height="24" fill="currentColor" class="close" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                  </svg>
                    </div>)
           )
          }
          <div className='containerSearch'>
          {
            searchCart && (
              searchResults.map(el => (
              <div key={el.id} className='itemSearch'>
                <h1>Название:  {el.title}</h1>
                <h1>Описание:  {el.description}</h1>
                <h1>Цена:  {el.price}</h1>
              </div>
            ))
            )
          }
        </div>
        </div>


        

        <div className='block-cart'>


          <div className='cart'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="svg bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg>
          <p className='title'>Избранное</p>
          </div>


           <div className='cart'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="svg bi-basket-fill" viewBox="0 0 16 16">
  <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
</svg>
          <p className='title'>Избранное</p>
          </div>
          


           <div className='cart'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="svg bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
          <p className='title'>Избранное</p>
          </div>
          
          


          

        </div>

      </div>

      

    </div>
  )
}

export default Header
