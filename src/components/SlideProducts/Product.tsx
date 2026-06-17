import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaShoppingCart, FaShare, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Product.css";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

type ProductItem = {
  id?: number;
  images: string[];
  title?: string;
  price?: number;
  availabilityStatus?: string;
  brand?: string;
  description?: string;
  stock?: string;
  category?: string;
  quantity: number;
};

type Props = {
  item: ProductItem;
};

const Product = ({ item }: Props) => {
  const context = useContext(CartContext);
  if (!context) {
    return null;
  }

  const { cartItems, addItem } = context;
  const isInCart = cartItems.find((i) => i.id == item.id);

  const navigate = useNavigate();
  const handleNavigateToCart = () => {
    navigate("/cart");
    toast.dismiss();
  };

  const handleAddToCart = () => {
    addItem(item);
    toast.success(
      <div className="toast-wrapper flex items-center gap-5 min-w-[300px] max-w-[300px]">
        <img
          src={item.images[0]}
          alt={item.title}
          className="toast-img h-[50px] w-auto!"
        />
        <div className="toast-content flex flex-col gap-[5px]">
          <span>
            <strong className="title">{item.title}</strong>
          </span>
          <span>Added To Cart</span>
          <div>
            <button
              onClick={handleNavigateToCart}
              className="btn bg-(--main-color) py-2 px-4 text-white rounded-full cursor-pointer"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>,
      {
        duration: 4000,
      }
    );
  };

  return (
    <div
      className={`product ${
        isInCart && "in-cart"
      } w-[250px] bg-(--white-color) cursor-pointer relative group overflow-hidden shadow-[10px_10px_15px_#94949429]`}
    >
      <Link
        to={`/products/${item.id}`}
        className="block border border-(--border-color) hover:border-(--main-color) p-[15px] transition-all duration-300 "
      >
        <span className="in-cart-sign absolute w-full flex items-center justify-center gap-2 py-1.5 text-sm">
          <FaCheck />
          in cart
        </span>

        <div className="product-img h-[180px] flex justify-center items-center">
          <img src={item.images[0]} alt="" className="h-40 w-auto!" />
        </div>
        <p className="product-name truncate my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora atque
          dolore iure?
        </p>
        <div className="product-starts flex items-center my-2">
          <FaStar className="fill-amber-300 text-xl" />
          <FaStar className="fill-amber-300 text-xl" />
          <FaStar className="fill-amber-300 text-xl" />
          <FaStar className="fill-amber-300 text-xl" />
          <FaRegStarHalfStroke className="fill-amber-300 text-xl" />
        </div>
        <p className="product-price text-(--main-color)! font-bold text-[20px]">
          ${item.price}
        </p>
      </Link>
      <div className="product-icons text-(--main-color)! absolute top-1/2 -right-11 -translate-y-1/2 flex flex-col gap-3 group-hover:right-2 transition-all duration-300">
        <span
          onClick={handleAddToCart}
          className="add-to-cart text-xl rounded-full p-1.5 bg-[#ededed] hover:bg-[#ddd] transition-colors"
        >
          <FaShoppingCart />
        </span>
        <span className="text-xl rounded-full p-1.5 bg-[#ededed] hover:bg-[#ddd] transition-colors">
          <FaRegHeart />
        </span>
        <span className="text-xl rounded-full p-1.5 bg-[#ededed] hover:bg-[#ddd] transition-colors">
          <FaShare />
        </span>
      </div>
    </div>
  );
};

export default Product;
