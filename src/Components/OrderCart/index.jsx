import { XMarkIcon } from '@heroicons/react/24/solid'
import { CartContext } from '../../Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'





export default function OrderCart({ children }) {
  const { productDetailOpen, closeProductDetail, totalCartUnits, totalCartProduct, cartProducts, resetCartProduct, orders, setOrders, } = useContext(CartContext)
  const ProductDetailLayout = productDetailOpen ? 'fixed' : 'hidden'

  const handleCheckout = () => {
    const currentDate = new Date();
    console.log(currentDate);
    const newOrder = {
      date: currentDate,
      products: cartProducts,
      totalCartUnits: totalCartUnits,
      totalCartProduct: totalCartProduct,
    }
    setOrders([...orders, newOrder])
    resetCartProduct()
  }
  return (
    <aside className={`${ProductDetailLayout} bg-white flex flex-col top-16 right-0 w-1/4 h-[calc(100%-4rem)] rounded-lg border-2 border-black`}>
      <header className="flex items-center align-middle justify-between pl-4 p-2">
        <h2>My order</h2>
        <button className='p-2' onClick={closeProductDetail}>
          <XMarkIcon className='h-4 w-4 text-black' />
        </button>
      </header>
      <main className='flex-1 overflow-y-scroll'>
        {/* Array Products */}
        {children}
      </main>
      <footer className='h-min w-full flex flex-col gap-2 p-2'>
        <div className='flex justify-between font-light text-base items-center'>
          <span>Total: </span>
          <span className='font-bold text-lg'>$ {totalCartProduct}</span>
          <span >{totalCartUnits}u.</span>
        </div>
        <Link to="/my-orders/last">
          <button className='bg-black text-white' onClick={handleCheckout}>Checkout</button>
        </Link>
      </footer>
    </aside >
  )
}

