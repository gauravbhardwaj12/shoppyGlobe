import Header from "./Header"
import { Outlet } from "react-router-dom"
import './Layout.css'
function Layout(){
    return(<>

    <div className="app">
         <Header/>
       
        <Outlet />
         <footer><p>© 2026 MyShop. All rights reserved.</p></footer>

    </div>
    
    </>)
}

export default Layout;