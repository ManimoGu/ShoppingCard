import React, {useRef, useState} from "react";
import './Summary.css'


const Summary = ({List, add, sum}) => {

const ship = useRef();
const code = useRef();

const [Total, setTotal] = useState(sum);

  return (

    <div>
      <div className="Summary">
        <h1 id="side">Summary</h1>

        <hr />
        <div>
          <section className="item">
            <h4>ITEMS {List.length}</h4>

            <h4>  £ {sum}</h4>
          </section>

          <div className="shipping">
            <h4>SHIPPING</h4>
            <select id="options" name="ship" ref={ship} onChange = { (e) =>{
              
              


            }}>
              <option value="Standard">Standard-delivery-5£</option>
              <option value="saab">Rapid-delivery-10£</option>
              <option value="fiat">Express-delivery-20£</option>
            </select>
          </div>

          <div className="code" >
            <h4>GIVE CODE</h4>
            <select id="options" name="give" ref={code} onChange= {()=> {

               

            }}>
              <option value="Standard">Standard -10%</option>
              <option value="saab">New -20%</option>
              <option value="fiat">VIP -30%</option>
            </select>
          </div>

          <hr />

          <section className="total">
            <h4>TOTAL PRICE £</h4>
            <h4>{Total}</h4>
          </section>

          <button id="Register">Regitrer</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
