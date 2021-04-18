import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const style = {
    color: "red",
  };
  const works = ["shalik", "monai", "kapor dhoua", "hari patil maja"];
  const products = [
    { name: "Photoshop", price: "200" },
    { name: "ilustrator", price: "455" },
    { name: "pdf reader", price: "6.77" },
    { name: "Premium Appss", price: "3433" },
  ];
  return (
    <div className="App">
      <header className="App-header">
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
        <Count></Count>
        <User></User>

        {works.map((work) => (
          <li>{work}</li>
        ))}
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
      </header>
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
function Count() {
  const [count, setCount] = useState(0);
  const handleDecrese = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onMouseMove={handleDecrese}>Decreese</button>
    </div>
  );
}
function User() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(data=>setUsers(data))
  }, []);
  const [users, setUsers] = useState([]);

  return(
    <div>
      {
       users.map(usr=><h1>{usr.name}</h1>)
      }
    </div>
  )
}

export default App;
