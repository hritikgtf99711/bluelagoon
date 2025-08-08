import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Thankyou from "./pages/Thankyou";
import Disclaimer from "./pages/Disclaimer";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        {/* <Route path='' element={<Home />} />  */}
      </Route>
    </Routes>
  );
}

export default App;
