import React, { useContext } from "react";
import './bookList.css';
import { dataContext } from "../Provider";

function List () {
    const {listBooks} = useContext(dataContext)

    return (
        <div className="list-contanier">
            <div className="list">
                {listBooks.map((books) =>(
                    <img  
                    key={books._id}
                    className="image list-book" 
                    src={books.cover}/>
                ))}
            </div>
        </div>
    )
}

export { List }