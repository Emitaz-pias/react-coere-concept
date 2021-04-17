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
    </div>
  );
}

export default App;
