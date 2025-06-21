import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './BreadСrumbs.css'

function BreadСrumbs() {
  const location = useLocation(); // Получаем текущую позицию
  const paths = location.pathname.split('/').filter(Boolean); // Разделяем путь на сегменты

  return (
  <div className='bread-crumbs-container'>
    <ul className='ul-bread-crumbs'>
      <li><Link to="/">Главная</Link></li>
      {paths.map((segment, i) => (
        <li key={i}>
          <Link to={`/${paths.slice(0, i+1).join('/')}`}>{segment}</Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default BreadСrumbs
