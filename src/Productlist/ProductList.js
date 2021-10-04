import React from "react";
import Product from "../Product/Product";

const ProductList = ({ items, Change, add, decrease, remove}) => {
  return (
    <div>
      {items.map((item) => (
        <Product key = {item.id} article={item}  EditQuantity={Change} minus ={decrease} addItem = {add} removeItem ={remove}/>
      ))}
    </div>
  );
};

export default ProductList;
