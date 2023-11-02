import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartContextProvider({ children }) {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0)

  // Product Detail· Open/Close
  const [productDetailOpen, setProductDetailOpen] = useState(0);
  const openProductDetail = () => setProductDetailOpen(true)
  const closeProductDetail = () => setProductDetailOpen(false)

  //  Products Detail · Show products
  const [productsToShow, setProductsToShow] = useState([])

  return (
    <CartContext.Provider value={{
      count,
      setCount,
      productDetailOpen,
      setProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productsToShow,
      setProductsToShow,
    }}>
      {children}
    </CartContext.Provider>
  )
}