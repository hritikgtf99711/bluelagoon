import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Thankyou from "./pages/Thankyou";
import Disclaimer from "./pages/Disclaimer";
function App() {


  return (
    <Routes>
      <Route path={import.meta.env.VITE_BASE_URL} element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path={import.meta.env.VITE_BASE_URL+"about"} element={<About />} />
        <Route path={import.meta.env.VITE_BASE_URL+"thankyou"} element={<Thankyou />} />
        <Route path={import.meta.env.VITE_BASE_URL+"disclaimer"} element={<Disclaimer />} />
      </Route>
    </Routes>
  );
}

export default App;
