import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function CatalogCard() {

  const[cards,setBooks]=useState([])

  useEffect(()=>{
    const fetchAllBooks = async ()=>{
      try{
       const res = await axios.get("http://localhost:4444/")
       console.log(res)
       setBooks(res.data)

      }catch(err){
        console.log(err)
      }
    }
    fetchAllBooks()

  },[])

  

  return (
    <div>
       <h1>Каталог</h1>
       <div className='books'>
        {cards.map(book=>(
          <div className='book' key={book.id}>
            <img src={`/img/${book.img}`}/>
            <h2>{book.title}</h2>
            <h2>{book.subtitle}</h2>
            <h2>{book.category}</h2>
            <h2>{book.size}</h2>
         
          </div>
        ))}
       </div>

      
    </div>
  )
}

export default CatalogCard
