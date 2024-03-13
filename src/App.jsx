import React, { useState } from 'react'
import { Counter } from './Counter'
import {List} from './bookList'
import { BooksAvailable } from './BooksAvailable'
import { FilterRange } from './FilterRange'
import { BooksGender } from './FilterGender'
import { ReadingList } from './ReadingList'
import { Provider } from './Provider'

function App() {
  const [filteredList, setFilteredList] = useState([]);

  return (
    <> 
      <Counter/>
      <BooksAvailable />
      <ReadingList/> 
      <Provider>
        <FilterRange setFilteredList={setFilteredList}/>     
        <BooksGender  setFilteredList={setFilteredList}/>
        <List list={filteredList}/>
      </Provider>
    </>
    
  )
}

export default App
