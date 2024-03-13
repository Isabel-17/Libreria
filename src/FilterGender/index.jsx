import React, { useContext } from "react";
import './BookGender.css'
import { dataContext } from "../Provider";

function BooksGender () {
    const {genres} = useContext(dataContext);

    return (
        <>
            <div className="container">
                <p>Filtrar por genero</p>
                <select className="opciones">
                    <option value="opcion1">Todos</option>
                        {genres.map((genres) => (
                            <option value={genres}
                                key={genres._id}
                            >
                                {genres.genre}
                            </option>
                            
                        ))}  
                </select>
            </div>
        </>
    )
}
export { BooksGender }