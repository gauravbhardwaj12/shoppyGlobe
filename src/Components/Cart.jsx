import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
function Cart(){
const cartitems=useSelector((state)=>state.cart.list);
console.log(cartitems)
    return (
        <>
        <p>Here are the cart items</p>
        {cartitems.map((item)=>{
            return(
            <CartItem key={item.id} product={item}/>
            )
        })}
        <Link to="/checkout">Checkout</Link>
        </>
    );
}
export default Cart;