import Header from "./Header"
import { Outlet } from "react-router-dom"
import './Layout.css'
function Layout(){
    return(<>

    <div className="app">
         <Header/>
       
        <Outlet />
         

    </div>
    
    </>)
}

export default Layout;