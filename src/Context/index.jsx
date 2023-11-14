import { createContext, useState } from "react";
import { totalPrice, totalUnits } from "../Utils";

export const CartContext = createContext()

export function CartContextProvider({ children }) {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0)

  // Product Detail· Open/Close
  const [productDetailOpen, setProductDetailOpen] = useState(0);
  const openProductDetail = () => setProductDetailOpen(true)
  const closeProductDetail = () => setProductDetailOpen(false)

  //  Products Detail · Show products
  const [productsHome, setProductsHome] = useState([])

  //  Products Cart · Show products
  const [cartProducts, setCartProducts] = useState([])


  const deleteCartProducts = (elem) => {
    const copyCartProducts = [...cartProducts]
    const UpdatedCartProducts = copyCartProducts.filter(item => item.id !== elem.id)
    setCartProducts([...UpdatedCartProducts])
    setCount(UpdatedCartProducts.length)
    countTotalCartProducts(UpdatedCartProducts)
  }
  //  Products Cart · Total
  const [totalCartProduct, setTotalCartProducts] = useState()
  const [totalCartUnits, setTotalCartUnits] = useState()

  const countTotalCartProducts = (products) => {
    setTotalCartProducts(totalPrice(products).toFixed(2))
    setTotalCartUnits(totalUnits(products))
  }

  // Products Cart - Add - Remove
  const updatedProductQuantity = (counter, id) => {
    const copyCartProducts = [...cartProducts]
    const indexProduct = copyCartProducts.findIndex(item => item.id === id)
    copyCartProducts[indexProduct].quantity = counter
    setCartProducts(copyCartProducts)
    countTotalCartProducts(copyCartProducts)
  }


  //  Saved Products · 
  const [savedProducts, setSavedProducts] = useState([])

  return (
    <CartContext.Provider value={{
      count,
      setCount,
      productDetailOpen,
      setProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productsHome,
      setProductsHome,
      cartProducts,
      setCartProducts,
      savedProducts, setSavedProducts, deleteCartProducts,
      totalCartProduct, setTotalCartProducts, countTotalCartProducts,
      totalCartUnits, setTotalCartUnits,
      updatedProductQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}