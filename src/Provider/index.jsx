import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { GetApi } from "../API";

const dataContext = createContext();

function Provider({children}) {
  const [listBooks, setListBooks] = useState([]);

  const total = listBooks.length;

    useEffect(() => {
      fetchApi();
    },[])
    
     const fetchApi = async () => {
        const result = await GetApi();
        setListBooks(Array.isArray(result) ? result : []);
    }

    return (
      <dataContext.Provider value={{
        listBooks, 
        total
      }}>
        {children}
      </dataContext.Provider>
    )
}

export { Provider, dataContext }