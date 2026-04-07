import { useDispatch } from "react-redux";
import { addtocart, decreaseQuantity, removetocart } from "../utils/Cart/Cartslice";
import "./CartItem.css";

function CartItem({ product }) {
  const dispatch = useDispatch();

  function handleRemove(productId) {
    dispatch(removetocart(productId));
  }

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4>{product.title}</h4>
        <p>${product.price} each</p>
      </div>

      <div className="cart-item-quantity">
        <button
          className="qty-btn"
          onClick={() => dispatch(decreaseQuantity(product.id))}
        >
          -
        </button>
        <span>{product.quantity}</span>
        <button
          className="qty-btn"
          onClick={() => dispatch(addtocart(product))}
        >
          +
        </button>
      </div>

      <div className="cart-item-total">
        <p>${product.price * product.quantity}</p>
      </div>

      <button className="remove-btn" onClick={() => handleRemove(product.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;