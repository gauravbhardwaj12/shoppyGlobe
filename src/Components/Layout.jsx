import Header from "./Header"
import Footer from "./Footer";
import { Outlet } from "react-router-dom"
function Layout(){
    return(<>
    <Header/>
    <Outlet/>
    <footer/>
    </>)
}

export default Layout;