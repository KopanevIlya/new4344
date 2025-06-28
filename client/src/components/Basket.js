import React, { useEffect, useState } from 'react';

function Basket() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4444/basket')
      .then(res => res.json())
      .then(data => {
        console.log('items:', data); 
        setItems(data);
      });
  }, []);






  const removeFromBasket = (id) => {
    fetch(`http://localhost:4444/basket/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
      setItems(items.filter(item => (item.basket_id || item.id) !== id));
    });
  };






  return (
    <div>
      <h2>Корзина</h2>
      {items.length === 0 && <p>Корзина пуста</p>}
      
      
      
      
      {items.map(item => (
        <div key={item.basket_id || item.id}>
          <img src={`/img/${item.img}`} alt={item.title} width={50}/>
          <span>{item.title}</span>
          <span>{item.price} ₽</span>


          
          <button onClick={() => removeFromBasket(item.basket_id || item.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}

export default Basket;