import React, { useState } from 'react';  
import './Filter.css'
import down_arrow from './img/down_arrow.svg'
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";

function Filter() {
  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);


  const handleChange = (fieldType, event) => {
    const result = event.target.value.replace(/[^0-9]/g, ''); // Убираем всё кроме цифр
    
    if (fieldType === 'from') {
        setValueFrom(result); // Меняем значение первого инпута
    } else if (fieldType === 'to') {
        setValueTo(result); // Меняем значение второго инпута
    }
    };

    const handleInput = (e) => {
      setMinValue(e.minValue);
      setMaxValue(e.maxValue);
      };

    // const handleChangeSlider = (e: ChangeResult) => {
    //   setMinValue(e.minValue);
    //   setMaxValue(e.maxValue);
    // };

  return (
    <div className='filter'>
      <div className='close-filter'>
        <button className='btn-close-filter'></button>
        <h1>Фильтры</h1>
      </div>
      <input type="checkbox" id="filter-toggle-price" className="hidden-checkbox" />
      <label htmlFor="filter-toggle-price" className="btn-filter-product">Цена
        <img src={down_arrow} className='down_arrow' alt="Стрелка вниз" width={20} height={20}/>
      </label>
      <div id="filter-price-product" className='filter-price-product'>
        <div className='span-price-filter'>
          <span className='span-from-filter'>От</span>
          <span className='span-to-filter'>До</span><br/>
        </div>
        <div className='inputs-price-filter'>
          <input className='input-from-filter'value={valueFrom} onChange={(event) => handleChange('from', event)}/>
          <input className='input-to-filter' value={valueTo} onChange={(event) => handleChange('to', event)}/><br/>
        </div>
      <div className="custom-slider-container">
        <MultiRangeSlider className="custom-multi-rangeslider"
          min={0}
          max={100}
          canMinMaxValueSame={true}// позволяет задать одинаковое мин и макс значения
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e)=>{
            handleInput(e);
          }}
          label={false}
          ruler={false}
          style={{ border: "none", boxShadow: "none", padding: "25px 10px"}}
          barLeftColor="#33394F"
          barRightColor="#33394F"
          barInnerColor="#F9D66F"
          thumbLeftColor="#FFBF05"
          thumbRightColor="#FFBF05"
         
        /> 

        <div className="range-values">
        <span className="slider-value-left">{minValue}</span>
        <span className="slider-value-right">{maxValue}</span>
        </div>
       </div>
  
      </div>
        <input type="checkbox" id="filter-toggle-color" className="hidden-checkbox" />
        <label htmlFor="filter-toggle-color" className="btn-filter-product">Цвета
          <img src={down_arrow} className='down_arrow' alt="Стрелка вниз" width={20} height={20}/>
        </label>
        <div id='filter-color-product' className='filter-color-product'>
          <ul className="color-checkboxes">
            <li><input type="checkbox"/> Оттенки белого</li>
            <li><input type="checkbox"/> Оттенки голубого</li>
            <li><input type="checkbox"/> Оттенки желтого</li>
            <li><input type="checkbox"/> Оттенки зеленого</li>
            <li><input type="checkbox"/> Оттенки розового</li>
            <li><input type="checkbox"/> Оттенки серого</li>
          </ul>
      </div>
        <input type="checkbox" id="filter-toggle-size" className="hidden-checkbox" />
        <label htmlFor="filter-toggle-size" className='btn-filter-product'>Размер
          <img src={down_arrow} className='down_arrow' alt="Стрелка вниз" width={20} height={20}/>
        </label>
        <div id='filter-size-product' className='filter-size-product'>
          <ul className="size-checkboxes">
            <li><input type="checkbox"/> 56</li>
            <li><input type="checkbox"/> 56-62</li>
            <li><input type="checkbox"/> 62</li>
            <li><input type="checkbox"/> 62-68</li>
            <li><input type="checkbox"/> 68</li>
            <li><input type="checkbox"/> 68-74</li>
          </ul>
      </div>
      <button className='btn-reset'>СБРОСИТЬ</button>
      
      
    </div>
  )
}

export default Filter


