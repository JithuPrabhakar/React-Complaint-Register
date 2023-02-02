import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Service />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}

export default App;
