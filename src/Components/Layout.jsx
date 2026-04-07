import Header from "./Header"
import Footer from "./Footer";
import { Outlet } from "react-router-dom"
import './Layout.css'
function Layout(){
    return(<>

    <div className="app">
         <Header/>
         <main className="content">
        <Outlet />
         </main>
        <footer/>
    </div>
    
    </>)
}

export default Layout;