import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import Navbar from '../../Components/Navbar'
import Layout from '../../Components/Layout'
import { CartContextProvider } from '../../Context'


function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothing', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/jewelery', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  )
}
export default App
