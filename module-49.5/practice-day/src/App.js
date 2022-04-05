import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Shop from './component/Shop/Shop';

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Shop/>
      <h2 className='text-danger'>app</h2>
    
    </div>
  );
}

export default App;
