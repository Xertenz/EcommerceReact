import type React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const TopHeader: React.FC = (): React.ReactNode => {
  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { cartItems } = context;

  return (
    <div className="top-header">
      <div className="container mx-auto flex justify-between items-center">
        <div className="left">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-16 py-3" />
          </Link>
        </div>

        <div className="center">
          <form
            action=""
            className="search-form flex justify-center items-center border bg-(--bg-color) border-(--main-color)"
          >
            <input
              type="text"
              name="search"
              id="search"
              className="search h-[38px] w-[440px] p-3 bg-(--bg-color) outline-none"
              placeholder="Search for a product..."
            />
            <button
              type="submit"
              className="cursor-pointer bg-(--main-color) h-[38px] w-[50px] flex justify-center items-center"
            >
              <FaSearch className="text-xl text-white" />
            </button>
          </form>
        </div>

        <div className="right">
          <div className="icons flex items-center gap-5">
            <div className="icon favorite relative text-2xl select-none cursor-pointer">
              <FaRegHeart />
              <span className="absolute -top-2 -right-2 text-[12px] bg-(--main-color) text-white w-5 h-5 flex justify-center items-center rounded-full">
                2
              </span>
            </div>

            <div className="icon cart relative text-2xl select-none cursor-pointer">
              <Link to={"/cart"} className="block">
                <TiShoppingCart />
                <span className="absolute -top-2 -right-2 text-[12px] bg-(--main-color) text-white w-5 h-5 flex justify-center items-center rounded-full">
                  {cartItems.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
