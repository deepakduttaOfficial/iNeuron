import React, { useEffect, useState } from "react";
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

import RingLoader from "react-spinners/RingLoader";
import Icon from "./images/fav1.png";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);
  return (
    <>
      {loading ? (
        <div className="spinner">
          <RingLoader color={"#cc7014"} loading={loading} size={100} />
          <img src={Icon} alt=".." />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default App;
