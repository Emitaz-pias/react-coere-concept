import logo from "./logo.svg";
import "./App.css";

function App() {
  const style = {
    color: "red",
  };
  const works = ["shalik", "monai", "kapor dhoua", "raing paila maja"];
  const products = [
    { name: "Photoshop", price: "200" },
    { name: "ilustrator", price: "455" },
    { name: "pdf reader", price: "6.77" },
    { name: "Premium Appss", price: "3433" },
  ];

  return (
    <div className="App">
      {/* // how to apply style from variable */}

      <h1 className="newbie" style={style}>
        {" "}
        my first heading with variable style
      </h1>
      {/* how to apply style inline */}
      <h2 style={{ backgroundColor: "red" }}>
        My second heading this is inline style
      </h2>
      <Person name="Mr. xenon" job="hosting"></Person>
      <Person name="Mr.solimoddui" job="wash"></Person>
      <Person name="shakil" job={works[3]}></Person>

      <ul>
        {" "}
        {works.map((work) => (
          <li>{work}</li>
        ))}
      </ul>
      {products.map((pd) => (
        <Product product={pd}></Product>
      ))}
    </div>
  );
}
function Person(props) {
  return (
    <div style={{ border: "1px solid red", margin: "10px" }}>
      <h1>Name:{props.name}</h1>
      <h2>job: {props.job}</h2>
    </div>
  );
}
function Product(props) {
  const productStye = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    margin: "10px",
    float: "left",
  };
  const { name, price } = props.product;
  return (
    <div style={productStye}>
      {/* <h3>{props.name}</h3>
      <h2>${props.price}</h2>
      <button>Buy now</button> */}

      {/*  witout destrcurting <h3>{props.product.name}</h3>
      <h2>${props.product.price}</h2>
      <button>Buy now</button> */}
      <h3>{name}</h3>
      <h2>${price}</h2>
      <button>Buy now</button>
    </div>
  );
}

export default App;
