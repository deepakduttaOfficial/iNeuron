import React from "react";
import "./css/style.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/AchieverStudent/Main";
import Company from "./components/Achievercompany/Company";
import Hall from "./components/Hallfame/Hall";
import Live from "./components/Liveprogram/Live";
import Product from "./components/Product/Product";
import Tech from "./components/Techavenger/Tech";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Company />
      <Hall />
      <Live />
      <Product />
      <Tech />
      <Footer />
    </>
  );
};

export default App;
