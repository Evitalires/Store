import { useContext } from "react"
import { CartContext } from "../../Context"

export default function ProductHome({ product }) {
  const { title, description, image, price, category } = product
  const { count, setCount, openProductDetail, cartProducts, setCartProducts, setTotalCartProducts, countTotalCartProducts } = useContext(CartContext)
  const onClick = () => {
    const newProducts = [...cartProducts]
    //It's in cart
    if (newProducts.find(item => item.id === product.id)) {
      const index = newProducts.findIndex(item => item.id === product.id)
      newProducts[index].quantity += 1;
    }
    else {
      product.quantity = 1
      newProducts.push(product)
    }
    setCartProducts([...newProducts])
    setCount(count + 1)
    countTotalCartProducts(newProducts)
    openProductDetail(true)
  }
  return (
    <article className="bg-white cursor-pointer flex flex-col justify-start items-center gap-2 rounded-lg shadow-sm w-48 min-h-min p-4 text-sm font-light">
      <figure className="relative pb-2 text-white">
        <img
          className="h-48 w-full rounded-lg object-contain object-center border-2"
          src={image}
          alt="nature image"
        />
        <span className="absolute top-2 right-1 p-1 px-2 rounded-lg bg-black/70 text-xs">{category}</span>
        <button onClick={onClick} className="absolute -bottom-2 inset-x-1/4 text-large w-20 bg-black" >Buy</button>
      </figure>
      <p className="w-full flex flex-col gap-2 py-2">
        <span className="truncate text-bold text-lg">{title}</span>
        <span className="truncate"> {description} </span>
      </p>
      <p className="text-lg font-bold border-t-2 border-black/30 w-full">
        <span>$ {price}</span>
      </p>
    </article>
  )
}