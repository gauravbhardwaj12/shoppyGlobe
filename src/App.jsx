import Home from './Components/Home';
import Cart from './Components/Cart';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Layout from './Components/Layout';
import ProductDetail from './Components/ProductDetail';
import Checkout from './Components/Checkout';
import NotFound from './Components/NotFound';
import './App.css'


function App() {
  
  const approuter=createBrowserRouter([
    {
      element:<Layout/>,
      errorElement:<NotFound/>,
      children:[
 {
      path:"/",
      element:<Home/>
    },
    {
      path:"/product/:id",
      element:<ProductDetail/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/checkout",
      element:<Checkout/>
    }
      ]
    }
   
  ]);

  return (
       <RouterProvider router={approuter}/>
  )
}

export default App;
