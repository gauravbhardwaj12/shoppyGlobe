import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearcart } from "../utils/Cart/Cartslice";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // Calculate totals
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handlesubmit(e) {
    e.preventDefault();

    // Prevent ordering if cart is empty
    if (cartItems.length === 0) {
      alert("Your cart is empty! Add items before placing order.");
      return;
    }

    // Validate inputs
    if (!name || !email || !address) {
      alert("Please fill all fields!");
      return;
    }

    // Success
    alert("Order placed successfully ✅");
    dispatch(clearcart());
    navigate("/");
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-grid">
        {/* FORM */}
        <form className="checkout-form" onSubmit={handlesubmit}>
          <h3>Billing Details</h3>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              placeholder="Enter your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {cartItems.length === 0 && (
            <p style={{ color: "red", marginBottom: "10px" }}>
              Cart is empty. Add items first.
            </p>
          )}

          <button
            type="submit"
            className="place-order-btn"
            disabled={cartItems.length === 0}
          >
            Place Order
          </button>
        </form>

        {/* SUMMARY */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>

          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} x {item.quantity}
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <div className="summary-total">
            <p>Total Items: {totalQuantity}</p>
            <h4>Total Price: ${totalPrice}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;