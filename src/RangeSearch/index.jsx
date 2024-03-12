import React from "react";
import './RangeSearch.css';

function RangeSearch () {
    return (
        <>
        <div className="range_container">
            <p className="range-title">Filtrar por paginas</p>
            <input className="range" type="range" id="myRange" min={10} max={3000}></input>
        </div>
        </>
    )
}
export { RangeSearch }