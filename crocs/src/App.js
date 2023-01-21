import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Homepage from './pages/Homepage';
import Hcrousel from './component/Hcrousel';
import Women from './pages/Women';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Homepage />
     <Women />
    </div>
  );
}

export default App;
