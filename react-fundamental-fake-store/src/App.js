import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Component/Menubar/Menubar';
import AllProduct from './Component/AllProduct/AllProduct';
import { useState } from 'react';

function App() {
const [count, setCount] = useState(0)
const singleCartCount = () => {
  setCount(count + 1)
}
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProduct singleCartCount={singleCartCount}></AllProduct>
     <h2>start project</h2>
    </div>
  );

  
}

export default App;
