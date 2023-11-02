import { useContext, useEffect, useState } from "react"
import Product from "../../Components/Product"
import { CartContext } from "../../Context"
import ProductDetail from "../../Components/ProductDetail"


function Home() {
  const [products, setProducts] = useState(null)
  const { productDetailOpen, productsToShow } = useContext(CartContext)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const ListProducts = ({ items, type }) => {
    console.log(items);
    return (
      items?.map((item) => (
        <Product
          product={item}
          key={item.id}
          type={type}
        />
      ))
    )
  }

  return (
    <section className={`grid ${productDetailOpen && "w-3/4"} grid-cols-4 items-center justify-items-center gap-2`}>
      <ListProducts items={products} type='home' />
      <ProductDetail>
        <ListProducts items={productsToShow} type='cart' />
      </ProductDetail>
    </section>
  )
}

export default Home