// react router dom
import { useRoutes, BrowserRouter } from 'react-router-dom';
// pages
import Home from '../Home/index.jsx';
import MyAccount from '../MyAccount/index.jsx';
import MyOrder from '../MyOrder/index.jsx';
import MyOrders from '../MyOrders/index.jsx';
import NotFound from '../NotFound/index.jsx';
import SignIn from '../SignIn/index.jsx';
import ShoppingCartProvider from '../../Context/index.jsx';
// components
import NavBar from '../../components/NavBar/index.jsx';
import CheckoutSideMenu from '../../components/CheckoutSideMenu/index.jsx';
// styles
import './App.css';

// creating app routes
const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Home />},
    { path:'/clothes', element: <Home />},
    { path:'/electronics', element: <Home />},
    { path:'/furnitures', element: <Home />},
    { path:'/toys', element: <Home />},
    { path:'/others', element: <Home />},
    { path:'/my-account', element: <MyAccount />},
    { path:'/my-orders', element: <MyOrders />},
    { path:'/my-order', element: <MyOrder />},
    { path:'/my-order/last', element: <MyOrder />},
    { path:'/my-orders/:id', element: <MyOrder />},
    { path:'/sign-in', element: <SignIn />},
    { path:'/*', element: <NotFound />},
  ]);

  return routes;
}

// principal conponent
const App = () => {
  return (
    // context app
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;