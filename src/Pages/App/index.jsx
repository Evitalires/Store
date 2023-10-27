import { useState } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import Navbar from '../../Components/Navbar'

function AppRoutes() {

  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
