import { useDispatch } from "react-redux";
import { addtocart,decreaseQuantity,removetocart } from "../utils/Cart/Cartslice";
function CartItem({product}){
    const dispatch=useDispatch();
    function handleremove(productid){
     dispatch(removetocart(productid))
    }
    return(<>
    <div>
        <h4>{product.title}</h4>
        <p>Quantity : {product.quantity}</p>
        <button onClick={()=>dispatch(decreaseQuantity(product.id))}>-</button>
        <button onClick={()=>dispatch(addtocart(product))}>+</button>
        <button onClick={()=>handleremove(product.id)}>remove item</button>
    </div>

    </>);
}
export default CartItem;