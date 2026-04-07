import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Home = lazy(() => import("./Components/Home"));
const Cart = lazy(() => import("./Components/Cart"));
const Layout = lazy(() => import("./Components/Layout"));
const ProductDetail = lazy(() => import("./Components/ProductDetail"));
const Checkout = lazy(() => import("./Components/Checkout"));
const NotFound = lazy(() => import("./Components/NotFound"));
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
    <Suspense fallback={<h2>Loading...</h2>}>
       <RouterProvider router={approuter}/>
    </Suspense>
      
  )
}

export default App;
