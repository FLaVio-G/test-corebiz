import { useState } from "react";

import "./App.css";
import Header from "./components/header";
import KeepBanner from "./components/keepBanner";
import Newsletter from "./components/newsletter";
import Products from "./components/products";

function App() {
  return (
    <>
      <div>
        <Header />
        <KeepBanner />
        <Products />
        <Newsletter />
      </div>
    </>
  );
}

export default App;
