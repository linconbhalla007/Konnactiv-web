
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App
