import logo from './logo.svg';
import './App.css';

function App() {
  const style= {
    color:"red"
  }
  const works =["shalik","monai", "kapor dhoua","raing paila maja"]

  return (
    <div className="App">
      {/* // how to apply style from variable */}
      
      <h1 className="newbie" style={style}> my first heading with variable style</h1>
      {/* how to apply style inline */}
      <h2 style={{backgroundColor:"red"}} >My second heading this is inline style</h2>
    <Person name="Mr. xenon" job="hosting"></Person>
    <Person name = "Mr.solimoddui" job="wash" ></Person>
    <Person name="shakil" job={works[3]}></Person>
    </div>
  );
}
function Person(props){
return <div style={{border:"1px solid red" ,margin:"10px"}} >
  <h1 >Name:{props.name}</h1>
  <h2>job: {props.job}</h2>
</div>
}

export default App;
