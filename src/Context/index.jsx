import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartContextProvider({ children }) {
  const [count, setCount] = useState(0)
  const [productDetailOpen, setProductDetailOpen] = useState(0);
  const openProductDetail = () => setProductDetailOpen(true)
  const closeProductDetail = () => setProductDetailOpen(false)

  return (
    <CartContext.Provider value={{
      count,
      setCount,
      productDetailOpen,
      setProductDetailOpen,
      openProductDetail,
      closeProductDetail,
    }}>
      {children}
    </CartContext.Provider>
  )
}