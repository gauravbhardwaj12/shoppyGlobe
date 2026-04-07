import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { clearcart } from "../utils/Cart/Cartslice";
import { useNavigate } from "react-router-dom";

function Checkout(){
const cartItems=useSelector((state)=>state.cart.list)
const dispatch=useDispatch();
const navigate=useNavigate();


const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [address,setAddress]=useState("");

//calculating totals
const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    function handlesubmit(e){
        e.preventDefault();
          if (!name || !email || !address) {
                 alert("Please fill all fields!");
                  return;
    }
alert("order placed successfully");
dispatch(clearcart());
navigate("/");

    }
    return(<>
    Fill  the form and place order button
    <form onSubmit={handlesubmit}>
        <div>
            <label>Name</label>
            <input type="text" name="fullname" placeholder="Enter your Full Name" onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
            <label >Email</label>
            <input type="email" name="email" id="" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
            <label htmlFor="address">Address</label>
            <input type="text" name="address" placeholder="Enter your Address" onChange={(e)=>setAddress(e.target.value)} />
        </div>
        
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p>Total Items: {totalQuantity}</p>
        <p>Total Price: ${totalPrice}</p>
        
        <button type="submit">Place order</button>
    </form>
    </>)
}
export default Checkout;