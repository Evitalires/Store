import ProductCart from "../ProductCart"
import ProductHome from "../ProductHome"




export default function Product({ product, type }) {
  const TypeProduct = {
    cart: <ProductCart product={product} />,
    home: <ProductHome product={product} />,
  }
  const CurrentProduct = () => TypeProduct[type]
  return (
    <CurrentProduct />
  )
}