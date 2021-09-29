import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <h1>Shopping Card</h1>
          <input className="filter" placeholder ="Filter by title"/>
        </header>

        <article>
          <div className="product">

            <div className="info">
              <img
                className="picture"
                src="https://kado-pro.com/wp-content/uploads/2020/09/tate-logo-black-tshirt-back-g1086.jpg"
                alt="black"
              />

              <div className="fabric">
                <h6>Shirt</h6>
                <h6>Coton</h6>
              </div>

            </div>
            <div className="number">
              <i class="fas fa-plus"></i>
              <input className="Quantity" />
              <i class="fas fa-minus"></i>
            </div>
            <span>40$</span>
            <i class="fas fa-times"></i>
          </div>
        </article>
      </main>

      <div className="Summary">
      <h1 id="side">Summary</h1>
      <div>
        <h4>ITEMS   132</h4>

      </div>
      </div>
    </div>
  );
}

export default App;
