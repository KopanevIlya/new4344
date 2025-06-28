import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CardContext = createContext(null);

export function CardProvider({children}) {
    const[cards,setCards]=useState([])

    useEffect(()=>{
      const fetchAllCards = async ()=>{
      try{
        const res = await axios.get('http://localhost:4444')
        console.log(res)
        setCards(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllCards()
    },[])
  return (
    
    <CardContext.Provider value={{ cards }}>
      {children}
    </CardContext.Provider>
    
  )
}

export default CardContext;
