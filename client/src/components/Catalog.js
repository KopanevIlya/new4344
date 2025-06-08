import React, { useState } from 'react'
import './Catalog.css'


function Catalog() {

  let[optionsOpen, setOptionsOpen]=useState(false)

  return (
    <div> <p1 className='catalog-heading'>Каталог</p1>
  
      <div className='catalog-options'>
        
        <div className='accessories'>
          <div className='yellow-acc'>
            <p className='group-name'>АКСЕССУАРЫ</p><div className='triangle'></div>
          </div>
        </div>

        <div className='middle-container'>

          <div className='envelopes'>
            <div className='yellow-env'>
              <p className='group-name'>КОНВЕРТЫ И ПЛЕДЫ</p><div className='triangle'> </div>
            </div>
          </div>

          <div className='clothes'>
            <div className='yellow-min' onClick={()=>setOptionsOpen(optionsOpen=!optionsOpen)} >

              {optionsOpen && (
                <div className='clothes-panel'></div>
              )}

              <p className='group-name'>ОДЕЖДА</p><div className='triangle'> </div>
            </div>
          </div>

          <div className='nappies'>
            <div className='yellow-min'>
              <p className='group-name'>ПЕЛЕНКИ</p><div className='triangle'> </div>
            </div>
          </div>
          

        </div>

        <div className='setlists'>
          <div className='yellow-set'>
            <p className='group-name'>ГОТОВЫЕ ПОДБОРКИ</p><div className='triangle'> </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Catalog
