import React, { useState } from 'react'
import './Modal.css'

function Modal() {



    const[stateBlock, setStateBlock] = useState(false);


  return (
    <div>

        <button onClick={() => setStateBlock(true)}>Заказать звонок</button>


        {
            stateBlock && (
                <div className='bgModal'></div>
            )
        }

        {stateBlock && (
            

        <div className='modal'>
        
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setStateBlock(false)} width="20" height="20" fill="currentColor" class="closeModal" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>

            <div>
            <h1 className='quest'>Задать вопрос</h1>


            <p className='type first'>Ваше имя</p>
            <input type='text' className='inputModal' placeholder='Иванов Иван Иванович'/>

            <p className='type'>Телефон</p>
            <input type='number' className='inputModal' placeholder='Иванов Иван Иванович'/>


            <p className='type'>E-mail</p>
            <input type='email' className='inputModal' placeholder='Иванов Иван Иванович'/>

            <p className='type'>Вопрос</p>
            <input type='text' className='inputText' placeholder='Иванов Иван Иванович'/><br/>
            <div className='buttonModal'> <button className='submit'>сохранить изменения</button></div>
           
            </div>
        </div>
        )}
      
    </div>
  )
}

export default Modal
