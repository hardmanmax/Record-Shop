import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../Utilities/firebase"
// import { addCollectionAndDocuments } from "../Utilities/firebase";
// import SHOP_DATA from '../shop-data';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  
  // This only needs to be done once to initialise the db.
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, [])

  useEffect(() => {
    //Made a new async function here because we are importing a function which is already async from outside.
    //This prevents problems with performing async funcions and sending props. 
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}