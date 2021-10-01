import { useState } from "react";
import "./App.css";
import Product from "./Product/Product";
import Summary from "./summary/Summary";
import ProductList from "./Productlist/ProductList";

function App(props) {
  const [Products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://contents.mediadecathlon.com/p1901255/k$8870d3bdfed8faa1f8b3422de5d92354/t-shirt-100-coton-fitness-sportee-noir.jpg?&f=452x452",
      type: "Shirt",
      fabric: "coton",
      price: 20,
      Quantity: 1,
    },

    {
      id: 2,
      image:
        "https://www.zeeman.com/media/catalog/product/cache/5050dbc22447fab33b3d2c8a729076f7/2/0/2020095597986_Front_01.jpg",
      type: "Shirt",
      fabric: "coton",
      price: 20,
      Quantity: 1,
    },

    {
      id: 3,
      image:
        "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
      type: "Shirt",
      fabric: "coton",
      price: 20,
      Quantity: 1,
    },
  ]);

  const count = () => {
    let Total = 0;

    Products.map(
      (product) => (Total = Total + product.price * product.Quantity)
    );

    return Total;
  };

  const [TotalPrice, setTotalPrice] = useState(count());

  const addition = () => {
    let TT = count();

    setTotalPrice(TT);
  };

  const ChangeQuantity = (element) => {
    Products.map((Product) =>
      Product.id === element.id
        ? (Product.Quantity = Product.Quantity + 1)
        : Product.Quantity
    );
  };

  const ChangeQuant = (element) => {
    Products.map((Product) =>
      Product.id === element.id
        ? (Product.Quantity = Product.Quantity - 1)
        : Product.Quantity
    );
  };

  return (
    <div className="App">
      <main>
        <header>
          <h1>Shopping Card</h1>
          <input className="filter" placeholder="Filter by title" />
        </header>

        <ProductList
          items={Products}
          Change={ChangeQuantity}
          decrease={ChangeQuant}
          add={addition}
        />
      </main>

      <Summary sum={TotalPrice} List={Products} />
    </div>
  );
}

export default App;
