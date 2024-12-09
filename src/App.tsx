import Footer from "./components/Footer";
import Header from "./components/Header";
import KeepBanner from "./components/KeepBanner";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import { CartProvider } from "./context/CartContext";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <CartProvider>
          <Header />
          <KeepBanner />
          <Products />
          <Newsletter />
          <Footer />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
