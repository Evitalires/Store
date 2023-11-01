import { useContext, useEffect, useState } from "react"
import Product from "../../Components/Product"
import { CartContext } from "../../Context"
import ProductDetail from "../../Components/ProductDetail"


function Home() {
  const [products, setProducts] = useState(null)
  const { count, setCount, openProductDetail, productDetailOpen } = useContext(CartContext)

  const buyProduct = () => {
    setCount(count + 1)
    openProductDetail()
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <section className={`grid ${productDetailOpen && "w-3/4"} grid-cols-4 items-center justify-items-center gap-2`}>
      {
        products?.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
            description={product.description}
            buyProduct={buyProduct}
          />
        ))
      }
      <ProductDetail />
    </section>
  )
}

export default Home