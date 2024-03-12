import React from "react";
import {useEffect, useState} from "react";
import { GetApi } from "../API";
import './bookList.css';

function List () {
    const [book, setBook] = useState([]);

    useEffect (() => {
        getBook();
    }, []);

    const getBook = async () =>  {
        const api = await GetApi()
        setBook(api)
    }
    return (
        <div className="list-contanier">
            {book.map((books) =>(
                <ul className="list">
                    <li className="list-book">
                        <img className="image" src={books.cover}/>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export { List }