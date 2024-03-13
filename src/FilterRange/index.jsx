import React, { useState, useEffect } from "react";
import { GetApi } from "../API";
import './FilterRange.css';

const BooksPages = () =>  {

    const [click, setClick] = useState();

    const handelClick = (e) => {
        setClick(e.target.value)
        console.log(e.target.value);
    }


    return (
        <>
            <div className="range_container">
                <p className="range_title">Filtrar  páginas</p>
                <input className="range" 
                    type="range"
                    min={200} 
                    max={1500} 
                    value={click}
                    onChange={(handelClick)}
                >
                </input>
{/* 
                <ul>
                    {books.filter((book) => book.pages === parseInt(amountPages)).map((book) => (
                        <li key={book._id}>{book.title} - {book.pages} páginas </li>
                    ))}
                </ul> */}
            </div>
        </>
    );
}

export { BooksPages};
