import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Contact from "./components/pages/Contact";
import Journal from "./components/pages/Journal";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import ProductDetails from "./components/pages/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/productDetails" element={<ProductDetails/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/journal" element={<Journal/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
