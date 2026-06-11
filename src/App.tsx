
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Product from './Product/Product';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';
import Impressum from './Impressum/Impressum';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Product />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/contact-details" element={<Impressum />} />
    </Routes>
  );
}

export default App
