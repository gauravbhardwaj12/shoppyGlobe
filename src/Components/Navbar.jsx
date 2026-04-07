import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar(){
    const Cartitems=useSelector((state)=>state.cart.list);
    const totalQuantity = Cartitems.reduce((sum, item) => sum + item.quantity, 0);
    return(<>
    <ul className="navbar">
            <li>
                <Link to="/">Home</Link>
                
            </li>
             <li>
                <Link to="/cart"><FontAwesomeIcon icon={faCartArrowDown} />{totalQuantity}</Link>
            
            </li>
        </ul>
    </>)
}
export default Navbar;