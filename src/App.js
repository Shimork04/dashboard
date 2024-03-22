import './App.css';
import Mainboard from './Mainboard/Mainboard';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Mainboard />
      <div> </div>
      <div> </div>
      </div>
    </div>
  );
}

export default App;
