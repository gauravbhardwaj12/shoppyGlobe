import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../utils/Cart/Cartslice";
import Data from "../utils/Data";
import "./Productdetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = Data();
  const product = products.filter(p => p.id == id);

  const cartItems = useSelector(state => state.cart.list);

  function handleaddTocart(item) {
    dispatch(addtocart(item));
  }

  return (
    <>
      {product.map((p) => {
        // check if product is already in cart
        const isInCart = cartItems.some(item => item.id == p.id);

        return (
          <div key={p.id} className="productdetail">
            <div className="productimages">
              <img src={p.images} alt={p.title} loading="lazy" />
            </div>

            <div className="productinfo">
              <h2 className="producttitle">{p.title}</h2>
              <p className="productdescription">{p.description}</p>
              <p>
                {p.price} <span>$</span>
              </p>

              {/* Conditional Button */}
              {isInCart ? (
                <button
                  className="checkout"
                  onClick={() => navigate("/checkout")}
                >
                  Go to Checkout
                </button>
              ) : (
                <button
                  className="addtocart"
                  onClick={() => handleaddTocart(p)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductDetail;