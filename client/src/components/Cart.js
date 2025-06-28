import React from 'react'
import './Cart.css'


function Cart() {
  return (
    <div className='containerCatalog'>

    <div className='cart'>

        <div className='img'>


          <img src='./img/cart1.png' />
          
        </div>
        
        <p className='title'>Подборка №106</p>

    </div>


    <div className='cart'>

        <div className='img'><img src='./img/cart2.png'/></div>
        
        <p className='title'>Подборка №106</p>

    </div>


    <div className='cart'>

            <div className='img'><img src='./img/cart3.png' /></div>

            <p className='title'>Подборка №106</p>

            </div>


            <div className='cart'>

            <div className='img'><img src='./img/cart4.png'/></div>

            <p className='title'>Подборка №106</p>

            </div>

            <div className='cart'>

            <div className='img'><img src='./img/cart3.png' /></div>

            <p className='title'>Подборка №106</p>

            </div>


    
      
    </div>
  )
}

export default Cart;
