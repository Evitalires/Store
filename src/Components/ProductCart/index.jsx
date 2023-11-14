import { useContext, useState } from "react";
import { CartContext } from "../../Context";
import CounterProduct from "../CounterProduct";


export default function ProductCart({ product }) {

  const { title, image, price, quantity, id } = product
  const { deleteCartProducts, savedProducts, setSavedProducts } = useContext(CartContext)
  console.log(quantity);
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
      <div className="flex h-min gap-2">
        <figure className="relative pb-2 text-white">
          <img
            className="h-12 w-12 rounded-lg object-contain object-center"
            src={image}
            alt="nature image"
          />
        </figure>
        <div className="flex flex-col gap-2 w-3/4">
          <p className="text-bold text-sm">
            {title}
          </p>
          <div className="flex gap-2 justify-around text-blue-600">
            <span onClick={onDelete}>Delete</span>
            <span onClick={onSave}>Save</span>
          </div>
          <div className="flex gap-2 justify-between font-bold">
            <CounterProduct quantity={quantity} id={id} />
            <span> ${quantity * price} </span>
          </div>
        </div>
      </div>
    </article>
  )
}