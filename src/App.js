import logo from './logo.svg';
import './App.css';

function App() {
  const style= {
    color:"red"
  }
  return (
    <div className="App">
      {/* // how to apply style from variable */}
      
      <h1 className="newbie" style={style}> my first heading with variable style</h1>
      {/* how to apply style inline */}
      <h2 style={{backgroundColor:"red"}} >My second heading this is inline style</h2>
    <Person></Person>
    <Person></Person>
    </div>
  );
}
function Person(){
return <div style={{border:"1px solid red" ,margin:"2px"}} >
  <h1 >Name: Sakib al ahsan</h1>
  <h2>job: lafalafi kora</h2>
</div>
}

export default App;
