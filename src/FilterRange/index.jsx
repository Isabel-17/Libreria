import React, { useEffect, useState, useContext } from "react";
import './FilterRange.css';
import { dataContext } from "../Provider";

const FilterRange = ( {setFilteredList} ) =>  {
    const {listBooks} = useContext(dataContext)
    const [click, setClick] = useState(0);

    useEffect(() => {
        setFilteredList(listBooks);
    }, [listBooks, setFilteredList]);


    const handelClick = (e) => {
        setClick(e.target.value);
        const filteredList =  listBooks.filter((book) => !click || book.pages >= click);
        setFilteredList(filteredList);
    }

    return (
        <>
            <div className="range_container">
                <p className="range_title">Filtrar  páginas</p>
                <input className="range" 
                    type="range"
                    min={0} 
                    max={1201} 
                    onChange={handelClick}
                >
                </input>
            </div>
        </>
    );
}

export { FilterRange};

