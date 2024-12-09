import Footer from "./components/Footer";
import Header from "./components/Header";
import KeepBanner from "./components/KeepBanner";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <KeepBanner />
        <Products />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
