import './Productcard.css'
import { Link } from 'react-router-dom';
function Productcard({product}){
    return(<>
    <Link to={`/product/${product.id}`}>
     <div className="product-card">
      <img src={product.images} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
    </Link>
   
    </>)
}

export default Productcard;