import { useState,useEffect } from "react";
function Data(){
const [products, setProducts] = useState([]);

   useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.log(err));
  }, []);

  return products;
}
export default Data;
