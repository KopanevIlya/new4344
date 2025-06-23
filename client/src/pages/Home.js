import React from 'react'
import Cart from './../components/Cart';
import Poster from './../components/Poster';
import Catalog from './../components/Catalog';
import Modal from './../components/Modal';
import Subscribe from './../components/Subscribe';
import About from './../components/About'


function Home() {
  return (
    <div>

      <Catalog/>
      <Cart/>
      <Modal/>
      <Poster/>
      <Subscribe/>
      <About/>

    </div>
  )
}

export default Home
