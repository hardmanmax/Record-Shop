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

//SUBTRACT ITEM FROM BASKET
const subtractBasketItem = (basketItems, basketItemToSubtract) => {

  const existingBasketItem = basketItems.find((basketItem) => 
  basketItem.id === basketItemToSubtract.id);

  if(existingBasketItem.quantity === 1) {
    return basketItems.filter(basketItem => basketItem.id !== basketItemToSubtract.id);
  }
  return basketItems.map((basketItem) => 
    basketItem.id === basketItemToSubtract.id ?
      {...basketItem, quantity: basketItem.quantity - 1}
      : basketItem
  )
}

//REMOVE ITEM FROM BASKET
const removeBasketItem = (basketItems, basketItemToRemove) => {
  return basketItems.filter(basketItem => basketItem.id !== basketItemToRemove.id);
}

//FUNCTIONS TO EXPORT

export const BasketContext = createContext({
  basketItems: [],
  addItemToBasket: () => {},
  basketCount: 0,
  basketTotal: 0,
  subtractItemFromBasket: () => {},
  removeItemFromBasket: () => {}
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

  const subtractItemFromBasket = (basketItemToSubtract) => {
    setBasketItems(subtractBasketItem(basketItems, basketItemToSubtract))
  }

  const removeItemFromBasket = (basketItemToRemove) => {
    setBasketItems(removeBasketItem(basketItems, basketItemToRemove))
  }
  
  const value = {
    addItemToBasket,
    basketItems,
    basketCount,
    basketTotal,
    subtractItemFromBasket,
    removeItemFromBasket
  }

  return <BasketContext.Provider value={value}>
    {children}
  </BasketContext.Provider>
}