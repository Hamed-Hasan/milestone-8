
import './App.css';
import Device from './component/Device/Device';
import Watch from './component/Watch/Watch';


function App() {
  return (
    <div className="App" style={{border: '1px solid grey'}}>
      <Device name={'Samsung'} price={'5000'}></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
