import ProductCart from "../ProductCart"
import ProductCheckout from "../ProductCheckout"
import ProductHome from "../ProductHome"


export default function Product({ product, type }) {
  const TypeProduct = {
    cart: <ProductCart product={product} />,
    home: <ProductHome product={product} />,
    checkout: <ProductCheckout product={product} />
  }
  const CurrentProduct = () => TypeProduct[type]
  return (
    <CurrentProduct />
  )
}