import React from 'react'
import './Footer.css'

function Footer() {
  return (
    
<div className='Footer-and-hr'>
  <hr></hr>
    <div className='Footer'>
      
      <div className='nav-list'>
      <div className='first-nav-list'>
        <ul>
            <li className='main'> Главная </li>
            <li>Как купить</li>
            <li>Доставка</li>
            <li>о компании</li>
            <li>Мы в instagram</li>
            <li>Акции</li>
            <li>Как купить</li>

           
            
        </ul>    
        </div>
         <div className='second-nav-list'>
        <ul>
            <li>Как купить</li>
            <li>Новости</li>
            <li>Отзывы</li>
            <li>Контакты</li>
            <li>Лицензии</li>
            <li>Оплата и возврат</li>
            <li>Условия доставки</li>

           
            
        </ul>    
        </div>
        </div>

        <div className='images-and-text'>
          <div className='first-string'>
            <img src="../../img/lalastore.png"></img>
            </div>
            <div className='second-string'>
              <p>2022 ⓒ "LalaSTORE"</p>
            </div>
            <div className='third-string'>
              
            </div>
            <div className='four-string'>
              <p><u>Политика конфиденциальности</u></p>
            </div>
        </div>


<div className='adress-info'>
  <div className='adress'>
<p>Адрес шоурума: г. Москва, <br></br> Электролитный проезд 3Б стр 6
</p>
  </div>
  <div className='info'>
    <p>info@lalastore.ru</p>
  </div>

  <div className='number'>
    <p>+7 916 361-30-00</p>
  </div>


</div>


    </div>
</div>
  )
}

export default Footer