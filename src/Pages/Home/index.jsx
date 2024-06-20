import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context"
import OrderCart from "../../Components/OrderCart"
import ListProducts from "../../Components/ListProducts"


function Home() {
  const [productsHome, setProductsHome] = useState(null)
  const { productDetailOpen, cartProducts } = useContext(CartContext)

  const filterProducts = (products) => {

    const url = window.location.href
    const category = url.split('/').pop();

    const newProducts = products.filter(product =>
      category ? product.category.toLowerCase().includes(category.toLowerCase()) : true
    );

    return newProducts
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductsHome(data))
  }, [])

  return (
    <section className={`grid ${productDetailOpen && "w-3/4"} grid-cols-4 items-center justify-items-center gap-2`}>
      <ListProducts items={filterProducts(productsHome)} type='home' />
      <OrderCart>
        <ListProducts items={cartProducts} type='cart' />
      </OrderCart>
    </section>
  )
}

export default Home