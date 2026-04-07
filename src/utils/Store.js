import { configureStore } from "@reduxjs/toolkit";
import cartslicereducer from "./Cart/Cartslice";
import productslicereducer from "./Cart/Productslice";
const Store=configureStore({
    reducer:{ 
        cart:cartslicereducer,
        products:productslicereducer
    }
});
export default Store;