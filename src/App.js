import "./App.css";
import Home from "./components/Home";
import NavbarStore from "./components/NavbarStore";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

let audio = new Audio("/mixkit-fast-double-click-on-mouse-275.wav");

const start = () => {
  audio.play();
};

let audio2 = new Audio("/mixkit-modern-click-box-check-1120.wav");

const start2 = () => {
  audio2.play();
};



function App() {
  return (
    <>
      <NavbarStore />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="products" element={<Products  />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart  />} />
        

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
