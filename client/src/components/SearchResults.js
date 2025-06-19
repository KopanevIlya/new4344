import React from 'react'
import Filter from './Filter'
import Item from './Item'
import './SearchResults.css'

function SearchResults() {
  return (
    <div className='result-page'>
        <h1>Результаты поиска:</h1>

    <div className='results'>
      <Filter/>
      <div className='item-line'>
        <Item/>
        <Item/>
        <Item/>
      </div>
      </div>
    </div>
  )
}

export default SearchResults
