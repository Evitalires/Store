import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context"
import ProductDetail from "../../Components/ProductDetail"
import ListProducts from "../../Components/ListProducts"


function Home() {
  const [productsHome, setProductsHome] = useState(null)
  const { productDetailOpen, cartProducts } = useContext(CartContext)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductsHome(data))
  }, [])

  return (
    <section className={`grid ${productDetailOpen && "w-3/4"} grid-cols-4 items-center justify-items-center gap-2`}>
      <ListProducts items={productsHome} type='home' />
      <ProductDetail>
        <ListProducts items={cartProducts} type='cart' />
      </ProductDetail>
    </section>
  )
}

export default Home