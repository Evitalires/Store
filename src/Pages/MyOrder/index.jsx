import { useContext } from "react"
import { CartContext } from "../../Context"
import ListProducts from "../../Components/ListProducts"
import OrderCart from "../../Components/OrderCart"



function MyOrder() {
  const { orders } = useContext(CartContext)
  const lastOrder = orders[orders.length - 1]
  return (
    <section>
      <h2>My order</h2>
      <ListProducts items={lastOrder.products} type='cart' />
      <OrderCart>
        <ListProducts items={lastOrder.products} type='cart' />
      </OrderCart>
    </section>
  )
}

export default MyOrder


