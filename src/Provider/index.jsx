/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useState, createContext } from "react";
import { GetApi } from "../API";
 
const dataContext = createContext();

function Provider({children}) {

  const [listBooks, setListBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  const totalBooks = readingList.length;

  useEffect(() => {
    fetchApi();
  },[])
  
  const fetchApi = async () => { 
    const result = await GetApi();
    setListBooks(Array.isArray(result) ? result : []);
  }

  const addToReadingList = (book) => {
    book.selected = true;
    setReadingList(prevState => [...prevState, book]);
  }

  const deleteReadingList = (index) => {
    const updatedReadingList = [...readingList];
    const removedBook = updatedReadingList.splice(index, 1)[0]; 
    const updatedListBooks = listBooks.map (book => {
      if (book._id === removedBook._id) {
        return {...book, selected: false};
      }
      return book;
    });
    setReadingList(updatedReadingList);
    setListBooks(updatedListBooks);
  }

return (
  <dataContext.Provider value={{
    listBooks, 
    readingList,
    addToReadingList, 
    totalBooks,
    deleteReadingList
  }}>
    {children}
  </dataContext.Provider>
)
}


export { Provider, dataContext };

