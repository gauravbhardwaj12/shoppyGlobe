import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import './Header.css'

function Header(){
    return (
        <>
        <header>
            <div id="logo"><Link to="/"><h2> ShoppyGlobe</h2></Link></div>
            <Navbar/>
        </header>
        </>
    );
}
export default Header;