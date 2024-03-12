import React from "react";
import './BookGender.css'

function BooksGender () {
    return (
        <>
        <div className="container">
            <p>Filtrar por genero</p>
            <select className="opciones">
                <option value="opcion1">Todos</option>  
            </select>
        </div>
        </>
    )
}
export { BooksGender }