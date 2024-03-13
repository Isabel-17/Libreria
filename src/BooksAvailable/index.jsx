import React from "react";
import './BooksAvailable.css'

function BooksAvailable ({total}) {
    return (
        <div className="available">
            <h1> {total} libros disponibles</h1>
        </div>
    )
}

export { BooksAvailable }