import { Route, Routes } from "react-router-dom";
import "./App.css";
import BtmHeader from "./components/Header/BtmHeader";
import TopHeader from "./components/Header/TopHeader";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/SlideProducts/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Category from "./pages/Categoy/Category";
import SearchResults from "./pages/SearchResults/SearchResults";
import Favorites from "./pages/Favorites/Favorites";

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

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
