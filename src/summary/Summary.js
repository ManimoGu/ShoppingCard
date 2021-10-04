import React from "react";
import "./Summary.css";

const Summary = ({ List, add, sum, final, Coupon, Shipping }) => {
  

 
  return (
    <div>
      <div className="Summary">
        <h1 id="side">Summary</h1>

        <hr />
        <div>
          <section className="item">
            <h4> {List.length}  ITEMS </h4>

            <h4> $ {sum}</h4>
          </section>

          <div className="shipping">
            <h4>SHIPPING</h4>
            <select
              id="options"
              name="ship"
              
              onChange={(e) => {
                Shipping(e.target.value);
              }}
            >
              <option>Select a Shipping method</option>
              <option >Standard-delivery-5£</option>
              <option >Rapid-delivery-10£</option>
              <option >Express-delivery-20£</option>
            </select>
          </div>

          <div className="code">
            <h4>GIVE CODE</h4>
            <select id="options" name="give" 
              onChange={(e) => {
                Coupon(e.target.value);
              }}>
              <option>Select a code</option>
              <option>Standard -10%</option>
              <option>New -20%</option>
              <option >VIP -30%</option>
            </select>
          </div>

          <hr />

          <section className="total">
            <h4>TOTAL PRICE</h4>
            <h4>$ {final}</h4>
          </section>

          <button id="Register">Regitrer</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
