import React from "react";
import "../ProductList/ProductList.css"

const Product = ({ product }) => {
  return (
    <div id="container">
   
      <div className="product-details">
      
        <h1>{product.title}</h1>
    
     <h3>{product.price}</h3>

        <p className="information">{product.description}</p>
    
      </div>

      <div className="product-image">
        <img src={product.image} alt={product.title} />
      
      </div>
     
    </div>
  );
};

export default Product;