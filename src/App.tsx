
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Terms from './Terms/Terms';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/agb" element={<Terms />} />
    </Routes>
  );
}

export default App
