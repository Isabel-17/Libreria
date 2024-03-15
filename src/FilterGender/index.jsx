import React, { useContext, useState, useEffect } from "react";
import './BookGender.css';
import { dataContext } from "../Provider";

function BooksGender ({setFilteredList}) {
    const {listBooks} = useContext(dataContext);
    const [uniqueGenres, setUniqueGenres] = useState([]);
    
    useEffect(() => {
        uniqueSet
        setUniqueGenres(Array.from(uniqueSet));
    }, [listBooks]);
    
    const uniqueSet = new Set(listBooks.map(book => book.genre));

    const handelAction = (e) => {
        const selectedGenre = e.target.value;
        const filteredList = listBooks.filter((book) => !selectedGenre || book.genre === selectedGenre);
        setFilteredList(filteredList);
    }
    return (
        <>
            <div className="container">
                <p>Filtrar por género</p>
                <select className="opciones" onChange={handelAction}>
                    <option className="title-genre" value="">
                    Todos
                    </option>
                    {uniqueGenres.map((genre) => (
                        <option 
                            key={genre} 
                            value={genre}
                        >
                            {genre}
                        </option>
                    ))}  
                </select>
            </div>
        </>
    )
}

export { BooksGender }
