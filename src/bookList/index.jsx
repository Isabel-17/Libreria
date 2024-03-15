import React, { useContext } from "react";
import { dataContext } from "../Provider";
import './bookList.css';

function List ({filteredList}) {
  const { addToReadingList } = useContext(dataContext);

  const handleClick = (book) => {
    if (!book.selected) { // Verifica si el libro no está seleccionado
      addToReadingList(book);
    }
  }
  return (
    <div className="list-contanier">
      <div className="list">
        {filteredList.map((book) =>(
          <img  
            key={book._id}
            className= {`image list-book ${book.selected ? 'selected' : ''}`} 
            src={book.cover}
            onClick={() => handleClick(book)}
          />
        ))}
      </div>
    </div>
  )
}

export { List };
