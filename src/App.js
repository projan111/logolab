// import Sound from ""
import React from "react";
import { Routes, Route } from "react-router-dom";
//Importing All the pages or categories. *********************
import Home from "./pages/home/Home";
// import About from "./pages/about/About"
// import Portfolio from "./pages/portfolio/Portfolio"
// import Pricing from "./pages/pricing/Pricing"
// import Services from "./pages/service/Services"
//End of importing pages**************************************
//Layout of the Whole site--------------------
import Layout from "./comp/layout/Layout";
//Css of the Whole site--------------------
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* About us is not in use */}
        {/* <Route path="/about" element={<About/>}></Route> */}
        {/* <Route path="/portfolio" element={<Portfolio/>}></Route> */}
        {/* <Route path="/pricing" element={<Pricing/>}></Route> */}
        {/*Our services is not in use */}
        {/* <Route path="/service" element={<Services/>}></Route> */}
      </Routes>
    </Layout>
  );
}

export default App;
