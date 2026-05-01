import "./App.css";
import BtmHeader from "./components/Header/BtmHeader";
import TopHeader from "./components/Header/TopHeader";
import Home from "./pages/Home/Home";

const App: React.FC = (): React.ReactNode => {
  return (
    <>
      <TopHeader />
      <BtmHeader />
      <Home />
    </>
  );
};

export default App;
