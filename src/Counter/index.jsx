import React, { useContext } from "react";
import './Counter.css';
import { dataContext } from "../Provider";

function Counter () {
    const {totalBooks} = useContext(dataContext)
    return (   
        <>
            <h2 className="title">
                {totalBooks === 0 ? "Sin libros en la lista de lectura" : "Con libros en la lista de lectura"}
            </h2>
        </>
    )
}
export { Counter }