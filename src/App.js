import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="boxes">
        {/* <div className="box1">box1</div> */}
        <div className='box1'> <Box1/></div>
       <div className='box2'><Box2/></div>
    
       
        {/* <div className="box2">box2</div> */}
        <div className="box3">
           <Box3/> 
           </div>
      </div>
    </div>
  );
}

export default App;
