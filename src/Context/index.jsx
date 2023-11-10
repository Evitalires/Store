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
  const [productsHome, setProductsHome] = useState([])

  //  Products Cart · Show products
  const [cartProducts, setCartProducts] = useState([])


  const deleteCartProducts = (elem) => {
    const copyCartProducts = [...cartProducts]
    const UpdatedCartProducts = copyCartProducts.filter(item => item.id !== elem.id)
    setCartProducts([...UpdatedCartProducts])
    setCount(UpdatedCartProducts.length)
  }
  //  Products Cart · Total
  const [totalCartProduct, setTotalCartProducts] = useState()

  const countTotalCartProducts = (products) => {
    let totalCount = 0
    products.forEach(item => {
      totalCount += (item.price * item.quantity)
    })
    setTotalCartProducts(totalCount.toFixed(2))
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
      totalCartProduct, setTotalCartProducts, countTotalCartProducts
    }}>
      {children}
    </CartContext.Provider>
  )
}