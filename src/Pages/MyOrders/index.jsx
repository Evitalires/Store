import { useContext } from "react"
import { CartContext } from "../../Context"
import ListProducts from "../../Components/ListProducts"

function MyOrders() {
  const { orders } = useContext(CartContext)
  console.log(orders[0]);
  return (
    <section>
      <h1>My Orders</h1>
      {/* <ListProducts items={orders[0].products} /> */}
    </section>
  )
}

export default MyOrders