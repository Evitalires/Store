import { useEffect, useState } from "react"
import Product from "../../Components/Product"



function Home() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => console.log(data))

  }, [])
  return (
    <section className="flex flex-wrap items-center justify-center gap-2">
      {
        products?.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))
      }

    </section>
  )
}

export default Home