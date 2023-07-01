// react router dom
import { useRoutes, BrowserRouter } from 'react-router-dom';
// pages
import Home from '../Home/index.jsx';
import MyAccount from '../MyAccount/index.jsx';
import MyOrder from '../MyOrder/index.jsx';
import MyOrders from '../MyOrders/index.jsx';
import NotFound from '../NotFound/index.jsx';
import SignIn from '../SignIn/index.jsx';
// components
import NavBar from '../../components/NavBar/index.jsx';
// styles
import './App.css';

// creating app routes
const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Home />},
    { path:'/my-orders', element: <MyOrders />},
    { path:'/my-account', element: <MyAccount />},
    { path:'/my-order', element: <MyOrder />},
    { path:'/sign-in', element: <SignIn />},
    { path:'/*', element: <NotFound />},
  ]);

  return routes;
}

// principal conponent
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App;