import React, { useContext } from "react";
import { dataContext } from "../Provider";
import './CounterReadingList.css'

function CounterReadingList () {
    const { readingList } = useContext(dataContext);
    
    if(readingList.length) return (
            <h2 className="title_reading_list">{ readingList.length } en la lista de lectura</h2> 
        )
    
   
}


export { CounterReadingList };

