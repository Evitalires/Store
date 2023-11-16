import { useContext } from "react"
import { CartContext } from "../../Context"
import { Link } from "react-router-dom";



function OrderPreview({ date, products, totalCartProduct, totalCartUnits }) {
  const newDate = new Date(date)
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0');
  const day = String(newDate.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);
  return (
    <article className="w-full border border-black flex">
      <div className="flex justify-start px-4 -space-x-3 font-mono text-white text-sm font-bold leading-6">
        {
          products.map((product, index) => (
            index < 3 && (
              <figure key={index + date}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white -z-10" />
              </figure>
            )
          ))
        }
      </div>
      <div className="text-left">
        <p>{formattedDate}</p>
        <h3>Total Order: ${totalCartProduct}</h3>
        <p>{totalCartUnits} Unidades</p>
      </div>
    </article>
  )
}

function MyOrders() {
  const { orders, productDetailOpen } = useContext(CartContext)
  console.log(orders);

  return (
    <section className={`${productDetailOpen && "w-3/4"} flex flex-col gap-5`}>
      <header className="">
        <h1>My orders</h1>
      </header>
      {
        orders.map(order => (
          <Link key={order.id} to={`/my-orders/${order.id}`} >
            <OrderPreview
              date={order.date}
              products={order.products}
              totalCartProduct={order.totalCartProduct}
              totalCartUnits={order.totalCartUnits}
            />
          </Link>
        ))
      }
    </section>
  )
}

export default MyOrders