import React, { useEffect, useState,} from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import './Item.css'


function Item() {

  const[cards, setItems]=useState([])

  useEffect(()=>{
    const fetchAllItems = async ()=>{
      try{
        const res = await axios.get("http://localhost:4444/")
        console.log(res)
        setItems(res.data)

      }catch(err){
        console.log(err)
      }
    }

    fetchAllItems()

  }, [])


  return (
    
       <div className='card'>
        {cards.map(card=>(
          <div className='item' key={card.id}>
            {/* <img>{card.img}</img> */}
            <div className='about-item'>
            <div className='item-img'></div> 
            
              <h2 className='item-text'>{card.title}, {card.color}</h2>
              <h2 className='item-text'>{card.price} ₽/шт</h2>
              {/* <button className='add-to-cart'><Link to="/add">Добавить книгу</Link></button> */}

              <div className='add-to-cart'></div>
            </div>
          </div>
        ))}

        
        
      </div>
    
  )
}

export default Item
