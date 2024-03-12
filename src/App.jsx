
import React, { useState } from 'react'
import { Counter } from './Counter'
import {List} from './bookList'
import { RangeSearch } from './RangeSearch'
import { BooksAvailable } from './BooksAvailable'
import { BooksGender } from './FilterGender'
import { ReadingList } from './ReadingList'

function App() {

  return (
    <>
      <Counter/>
      <BooksAvailable/>
      <RangeSearch/>
      <BooksGender/>
      <ReadingList/>
      <List/>
    </>
  )
}

export default App
