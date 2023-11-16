import { useContext } from "react"
import { CartContext } from "../../Context"
import ListProducts from "../../Components/ListProducts"
import OrderCart from "../../Components/OrderCart"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"


function MyOrder() {
  const { orders, productDetailOpen } = useContext(CartContext)
  const lastOrder = orders[orders.length - 1]
  return (
    <section className={`${productDetailOpen && "w-3/4"} flex flex-col gap-4 px-4`}>
      <header className="flex gap-2 items-center border border-black">
        <Link to={'/my-orders'}>
          <ChevronLeftIcon className="h-10 w-10 text-black " />
        </Link>
        <h1 className="m-auto h-10 text-2xl">My order</h1>
      </header>
      <ListProducts items={lastOrder.products} type='checkout' />
      <OrderCart>
        <ListProducts items={lastOrder.products} type='cart' />
      </OrderCart>
    </section>
  )
}

export default MyOrder


