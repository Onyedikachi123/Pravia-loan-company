import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import Navbar from './components/Navbar';
// import About from './pages/About';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensures the container is at least the height of the screen */}
      <Navbar />
      
      <div className="flex-grow"> {/* Allows content to grow and push the footer down */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/getstarted" element={<GetStarted />} />
          {/* Additional routes can be added here */}
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
