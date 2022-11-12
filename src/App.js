import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import Shop from "./MyComponents/Shop";
import Contact from "./MyComponents/Contact";
import About from "./MyComponents/About";
import Home from "./MyComponents/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";




 
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
    <Footer/>
    </>
  );
}

export default App;
