import { createContext, useEffect, useState } from "react";

//ADD ITEM TO BASKET
const addBasketItem = (basketItems, productToAdd) => {
  
  const existingBasketItem = basketItems.find(
    (basketItem) => basketItem.id === productToAdd.id);
  
    if (existingBasketItem) {
      return basketItems.map((basketItem) => 
      basketItem.id === productToAdd.id ?
      {...basketItem, quantity: basketItem.quantity + 1}
      : basketItem
      )
    }
  return [...basketItems, {...productToAdd, quantity: 1}];
}

//FUNCTIONS TO EXPORT

export const BasketContext = createContext({
  basketItems: [],
  addItemToBasket: () => {},
  basketCount: 0,
  basketTotal: 0,
});

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [basketCount, setBasketCount] = useState(0);
  const [basketTotal, setBasketTotal] = useState(0);


  useEffect(() => {
    const newBasketCount = basketItems.reduce(
      (total, basketItem) => total + basketItem.quantity, 0)
      setBasketCount(newBasketCount)
  }, [basketItems]);

  useEffect(() => {
    const newBasketTotal = basketItems.reduce(
      (total, basketItem) => total + basketItem.quantity * basketItem.price, 0)
      setBasketTotal(newBasketTotal)
  }, [basketItems]);

  const addItemToBasket = (productToAdd) => {
    setBasketItems(addBasketItem(basketItems, productToAdd))
  }
  
  const value = {
    addItemToBasket,
    basketItems,
    basketCount,
    basketTotal
  }

  return <BasketContext.Provider value={value}>
    {children}
  </BasketContext.Provider>
}