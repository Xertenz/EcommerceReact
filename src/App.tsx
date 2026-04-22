import "./App.css";
import BtmHeader from "./components/Header/BtmHeader";
import TopHeader from "./components/Header/TopHeader";

const App: React.FC = (): React.ReactNode => {
  return (
    <>
      <TopHeader />
      <BtmHeader />
    </>
  );
};

export default App;
