import React, { useContext } from "react";
import './bookList.css';
import { dataContext } from "../Provider";

function List ({ list }) {

    return (
        <div className="list-contanier">
            <div className="list">
                {list.map((books) =>(
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