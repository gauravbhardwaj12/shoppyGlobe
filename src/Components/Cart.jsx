import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const cartitems = useSelector((state) => state.cart.list);

  const totalQuantity = cartitems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cartitems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartitems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartitems.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>

          <div className="cart-summary">
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice}</p>

            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;