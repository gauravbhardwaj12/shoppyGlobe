import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart } from "../utils/Cart/Cartslice";
import Data from "../utils/Data";
import './Productdetail.css'

function ProductDetail(){
    const {id}=useParams();
    let products=Data();
    const product=products.filter(p=>p.id==id);
    const dispatch=useDispatch()
    
    function handleaddTocart(item){
      dispatch(addtocart(item));
    }
    
    return(<>
    {
        product.map((p)=>{
            return(
            <div key={p.id} className="productdetail">
                <div className="productimages">
                  <img src={p.images} alt="" />
                </div>
                <div className="productinfo">
               <h4>{p.title}</h4>
               <p>{p.description}</p>
               <p>{p.price}<span>$</span></p>
               <button onClick={()=>handleaddTocart(p)}>Add to cart</button>
                </div>
                
            </div>
           
            )
        })
    }

    
    </>);
}
export default ProductDetail;