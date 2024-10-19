import { useContext } from "react";
import { dataContext } from "../Provider";
import './ReadingList.css';

function ReadingList () {
  const { readingList, deleteReadingList} = useContext(dataContext);
 console.log(deleteReadingList);
  const isEmpty = readingList.length === 0;

  if (isEmpty) {
    return null;
  }

  return ( 
    <div className="reading images">
      <h1 className="reading-title">Lista de lectura</h1>
      <div className="lista">
        {readingList.map((book, index) => ( 
          <div key={book._id} className="book_container">
              <img  
                  className="list-book_reading" 
                  src={book.cover}
              />
                <div className="element">
                  <button
                      className="button"
                      onClick={() => deleteReadingList(index)}
                  >
                      x
                  </button>
                </div>
              
              </div>
        ))} 
      </div>
    </div>
  );
}

export { ReadingList };
