import React from "react";
import Product from "../Product/Product";

const ProductList = ({ items, Change, add, decrease }) => {
  return (
    <div>
      {items.map((item) => (
        <Product key = {item.id} article={item}  EditQuantity={Change} minus ={decrease} addItem = {add}/>
      ))}
    </div>
  );
};

export default ProductList;
