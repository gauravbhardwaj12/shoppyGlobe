import Productcard from "./Productcard";
import Data from "../utils/Data.js";
import { useSelector,useDispatch } from "react-redux";
import { setProducts,setSearchTerm } from "../utils/Cart/Productslice.js";
import { useEffect } from "react";
import './Productlist.css'
function ProductList(){
    const dispatch=useDispatch();
    const fetchedproducts=Data();
    const products = useSelector(state => state.products.filteredList);
    const searchTerm = useSelector(state => state.products.searchTerm);

  // only update Redux when data comes from hook
  useEffect(() => {
    if (fetchedproducts.length > 0) {
      dispatch(setProducts(fetchedproducts));
    }
  }, [fetchedproducts, dispatch]);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
    
    return(<>
    <div><label htmlFor="">Search</label>
     <input className="searchbox" type="text" placeholder="Search products..." value={searchTerm}  onChange={handleSearch} />
    </div>
     
    <div id="productlist">
        {products.map((p)=>{
         return(
            <Productcard key={p.id}  product={p}/>
        )
        })}
    </div>
       
    
    </>);
}
export default ProductList;