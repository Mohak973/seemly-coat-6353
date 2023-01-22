import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Homepage from './pages/Homepage';
import Hcrousel from './component/Hcrousel';
import Women from './pages/Women';
import AllRoutes from './component/AllRoutes';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <AllRoutes />
     <Footer />
    </div>
  );
}

export default App;
