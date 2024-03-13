import React, { useContext, useState, useEffect } from "react";
import './BookGender.css';
import { dataContext } from "../Provider";

function BooksGender ({setFilteredList}) {
    const {genres} = useContext(dataContext);
    const [filtered, setFiltered] = useState(null);
    const [uniqueGenres, setUniqueGenres] = useState([]);

    useEffect(() => {
        const uniqueSet = new Set(genres.map(book => book.genre));
        setUniqueGenres(Array.from(uniqueSet));
    }, [genres]);

    const handelAction = (e) => {
        const selectedGenre = e.target.value;
        setFiltered(selectedGenre);
        const filteredList = genres.filter((book) => !selectedGenre || book.genre === selectedGenre);
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
