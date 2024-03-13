import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { GetApi } from "../API";

const dataContext = createContext();

function Provider({children}) {
 
    const [listBooks, setListBooks] = useState([]);
    const [genres, setGenres ] = useState([]);

    useEffect(() => {
        fetchApi();
    },[])

     const fetchApi = async () => {
        const result = await GetApi();
        setListBooks(Array.isArray(result) ? result : []);
        setGenres(Array.isArray(result) ? result : [])
    }

    return (
      <dataContext.Provider value={{
        listBooks, 
        genres,
      }}>
        {children}
      </dataContext.Provider>
    )
}

export { Provider, dataContext }