import { Route, Routes } from "react-router-dom";
import "./App.css";
import BtmHeader from "./components/Header/BtmHeader";
import TopHeader from "./components/Header/TopHeader";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/SlideProducts/ScrollToTop";

const App: React.FC = (): React.ReactNode => {
  return (
    <>
      <div className=" sticky top-0 left-0 z-10 bg-(--white-color)">
        <TopHeader />
        <BtmHeader />
      </div>
      <ScrollToTop />

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            backgroundColor: "#e9e9e9",
            borderRadius: "8px",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
