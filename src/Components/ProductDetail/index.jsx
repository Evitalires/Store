import { XMarkIcon } from '@heroicons/react/24/solid'
import { CartContext } from '../../Context'
import { useContext } from 'react'


export default function ProductDetail({ children }) {
  const { productDetailOpen, closeProductDetail } = useContext(CartContext)
  const ProductDetailLayout = productDetailOpen ? 'fixed' : 'hidden'
  console.log(productDetailOpen);


  return (
    <aside className={`${ProductDetailLayout} bg-white top-16 right-0 w-1/4 h-full rounded-lg border-2 border-black`}>
      <header className="flex items-center align-middle justify-between pl-4 p-2">
        <h2>Product Detail</h2>
        <button className='p-2' onClick={closeProductDetail}>
          <XMarkIcon className='h-4 w-4 text-black' />
        </button>
      </header>
      <main className='min-h-min h-full overflow-y-scroll'>
        {children}
      </main>
    </aside>
  )
}

