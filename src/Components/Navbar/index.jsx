import { NavLink } from "react-router-dom"

function Navbar() {
  const activeStyle = (isActive) => {
    return isActive ? 'underline underline-offset-4 decoration-wavy text-black' : undefined
  }
  const links = [
    { to: '/', textLink: 'Flow' },
    { to: '/my-orders', textLink: 'My Orders' },
    { to: '/my-account', textLink: 'My Account' },
    { to: '/sign-in', textLink: 'Sign In' },
    { to: '/my-order', textLink: 'My Order 🛒' },
  ]

  return (
    <nav className="flex justify-between items-center fixed z-10 py-5 px-8 font-light text-black/70 w-full"  >
      <ul className="flex gap-3 items-center">
        <li className="font-semibold text-lg text-black ">
          <NavLink to={'/'}>
            {'Flow'}
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
        <li>
          🛒 0
        </li>
      </ul>
    </nav>
  )

}

export default Navbar
