
import React, { useState } from 'react'
import { Counter } from './Counter'
import {List} from './bookList'
import { BooksAvailable } from './BooksAvailable'
import { BooksGender } from './FilterGender'
import { ReadingList } from './ReadingList'
import { Provider } from './Provider'
import { BooksPages } from './FilterRange'

function App() {

  return (
    <> 
      <Counter/>
      <BooksAvailable />
      <BooksPages/>     
      <ReadingList/> 
      <Provider>
        <BooksGender/>
        <List/>
      </Provider>
    </>
    
  )
}

export default App
