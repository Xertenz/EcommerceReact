import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./ProductInfo.css";

type Product = {
  product: {
    id: number;
    images: string[];
    title: string;
    price: number;
    availabilityStatus: string;
    brand: string;
    description: string;
    stock: string;
    category: string;
    quantity: number;
  };
};

const ProductInfo = ({ product }: Product) => {
  const context = useContext(CartContext);
  if (!context) {
    return null;
  }

  const { cartItems, addItem } = context;
  const isInCart = cartItems.find((i) => i.id == product.id);

  const navigate = useNavigate();
  const handleNavigateToCart = () => {
    navigate("/cart");
    toast.dismiss();
  };

  const handleAddToCart = () => {
    if (!isInCart) {
      addItem(product);
      toast.success(
        <div className="toast-wrapper flex items-center gap-5 min-w-[300px] max-w-[300px]">
          <img
            src={product.images[0]}
            alt={product.title}
            className="toast-img h-[50px] w-auto!"
          />
          <div className="toast-content flex flex-col gap-[5px]">
            <span>
              <strong className="title">{product.title}</strong>
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
    }
  };

  return (
    <div className={`item-details w-3/5! border-none ${isInCart && "in-cart"}`}>
      <div className="wrapper">
        <h1 className="name mb-4 text-4xl font-bold text-(--main-color)!">
          {product.title}
        </h1>
        <div className="product-starts flex items-center mb-5">
          <FaStar className="fill-amber-300 text-xl" />
          <FaStar className="fill-amber-300 text-xl" />
          <FaStar className="fill-amber-300 text-xl" />
          <FaStar className="fill-amber-300 text-xl" />
          <FaRegStarHalfStroke className="fill-amber-300 text-xl" />
        </div>
        <p className="price text-[22px] mb-2">$ {product.price}</p>
        <p className="availibility font-bold mb-2 text-[16px]">
          AvailabilityStatus:{" "}
          <span className="text-(--main-color)">
            {product.availabilityStatus}
          </span>
        </p>
        <p className="brand font-bold text-[16px] mb-2">
          Brand: <span className="text-(--main-color)">{product.brand}</span>
        </p>
        <p className="description leading-normal mb-5">{product.description}</p>
        <p className="stock mb-5 font-bold text-[22px] text-(--main-color)!">
          Hurry Up! Only <span>{product.stock}</span> products left in the stock
        </p>
        <button
          onClick={handleAddToCart}
          className={`${
            isInCart &&
            "bg-white text-(--main-color)! border border-(--main-color)"
          } btn inline-flex items-center gap-2 align-middle bg-(--main-color) text-white mb-5 px-4 py-2 rounded cursor-pointer`}
        >
          <span>{isInCart ? "In The Cart" : "Add To Cart"}</span>{" "}
          <TiShoppingCart />
        </button>
        <br />

        <div className="icons inline-flex">
          <span className="text-xl rounded-full p-1.5 bg-[#ededed] hover:bg-(--main-color) hover:text-white transition-colors cursor-pointer">
            <FaRegHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
