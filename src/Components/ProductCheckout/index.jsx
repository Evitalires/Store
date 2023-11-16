import { useContext } from "react";
import { CartContext } from "../../Context";
import CounterProduct from "../CounterProduct";


export default function ProductCheckout({ product }) {

  const { title, image, price, quantity, id, description } = product
  const { deleteCartProducts, savedProducts, setSavedProducts } = useContext(CartContext)
  const onDelete = () => {
    deleteCartProducts(product)
  }
  const onSave = () => {
    const copySavedProducts = [...savedProducts]
    const UpdatedSavedProducts = copySavedProducts.push(product)
    setSavedProducts(UpdatedSavedProducts)
  }
  return (
    <article className="bg-white cursor-pointer flex flex-col gap-2 rounded-lg shadow-sm w-full p-2 text-sm font-light">
      <div className="flex h-min gap-10">
        <figure className="relative pb-2 text-white">
          <img
            className="h-24 w-24 rounded-lg object-contain object-center"
            src={image}
            alt="nature image"
          />
        </figure>
        <div className="flex flex-col gap-2 w-3/4 text-left">
          <p className="text-lg font-semibold">
            {title}
          </p>
          <p>{description}</p>
          <div className="flex gap-20 justify-start font-bold">
            <CounterProduct quantity={quantity} id={id} />
            <span> ${quantity * price} </span>
          </div>
          <div className="flex gap-20 justify-start text-blue-600">
            <span onClick={onSave}>Save</span>
            <span onClick={onDelete}>Delete</span>
          </div>

        </div>
      </div>
    </article>
  )
}