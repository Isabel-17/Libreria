import React, { useState } from 'react'
import { Counter } from './Counter'
import { CounterReadingList } from './CounterBooks'
import { ReadingList } from './ReadingList'; 
import { BooksAvailable } from './BooksAvailable'
import { FilterRange } from './FilterRange'
import { BooksGender } from './FilterGender'
import { List } from './bookList'
import { Provider } from './Provider'

function App() {
  const [filteredList, setFilteredList] = useState([]);


  return (
    <> 
      <Provider>
        <Counter/>
        <CounterReadingList/>
        <ReadingList/>
        <BooksAvailable total={filteredList.length}/>
        <FilterRange setFilteredList={setFilteredList}/>     
        <BooksGender  setFilteredList={setFilteredList}/>
        <List filteredList={filteredList}/>      
        </Provider>
    </>
  )
}

export default App
