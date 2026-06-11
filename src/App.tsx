import { Route, Routes } from "react-router-dom";
import "./App.css";
import BtmHeader from "./components/Header/BtmHeader";
import TopHeader from "./components/Header/TopHeader";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const App: React.FC = (): React.ReactNode => {
  return (
    <>
      <TopHeader />
      <BtmHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
