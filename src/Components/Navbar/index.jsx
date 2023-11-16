import { NavLink } from "react-router-dom"
import { CartContext } from "../../Context"
import { useContext } from "react"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"



function Navbar() {
  const activeStyle = (isActive) => {
    return isActive ? 'underline underline-offset-4 decoration-wavy text-black' : undefined
  }
  const { count, openProductDetail } = useContext(CartContext)

  return (
    <nav className="text-black/70 bg-white flex justify-between items-center fixed z-10 top-0 w-full h-16 py-5 px-8 text-sm font-light"  >
      <ul className="flex gap-3 items-center">
        <li className="font-extrabold text-xl text-black">
          <NavLink to={'/'}>
            {'Flowi'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/'} className={({ isActive }) => activeStyle(isActive)}>
            {'All'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/clothes'} className={({ isActive }) => activeStyle(isActive)}>
            {'Clothes'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/electronics'} className={({ isActive }) => activeStyle(isActive)}>
            {'Electronics'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/furniture'} className={({ isActive }) => activeStyle(isActive)}>
            {'Furniture'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/toys'} className={({ isActive }) => activeStyle(isActive)}>
            {'Toys'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/Others'} className={({ isActive }) => activeStyle(isActive)}>
            {'Others'}
          </NavLink>
        </li>
      </ul>
      <ul className="flex gap-3 items-center">
        <li >Alex Ramirez</li>
        <li>
          <NavLink to={'/my-orders'} className={({ isActive }) => activeStyle(isActive)}>
            {'My orders'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/my-account'} className={({ isActive }) => activeStyle(isActive)}>
            {'My Account'}
          </NavLink>
        </li>
        <li>
          <NavLink to={'/sign-in'} className={({ isActive }) => activeStyle(isActive)}>
            {'Sign In'}
          </NavLink>
        </li>
        <li className='flex gap-1 items-center cursor-pointer' onClick={openProductDetail}>
          <ShoppingBagIcon className="h-4 w-4 text-black" /> {count}
        </li>
      </ul>
    </nav>
  )

}

export default Navbar
