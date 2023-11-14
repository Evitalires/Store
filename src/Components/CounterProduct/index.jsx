import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { CartContext } from "../../Context";


export default function CounterProduct({ onAdd, onRemove, quantity, id }) {
  const [counter, setCounter] = useState(quantity)
  const { updatedProductQuantity } = useContext(CartContext)
  const add = () => {
    let newCounter = counter
    setCounter(++newCounter)
    updatedProductQuantity(newCounter, id)
  }
  const remove = () => {
    let newCounter = counter
    setCounter(--newCounter)
    updatedProductQuantity(newCounter, id)
  }
  return (
    <div className="flex gap-2 w-9">
      <button onClick={add} className="text-black p-0 px-1" ><PlusIcon className="w-3" /></button>
      <span> {counter} </span>
      <button onClick={remove} className="text-black p-0 px-1" > <MinusIcon className="w-3" /></button>
    </div>
  )
}