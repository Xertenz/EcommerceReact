import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaShoppingCart, FaShare, FaRegHeart } from "react-icons/fa";

type Props = {
  item: {
    images: string[];
    price: number;
  };
};

const Product = ({ item }: Props) => {
  console.log(item);
  return (
    <div className="product w-[250px] p-[15px] bg-(--white-color) border border-(--border-color) hover:border-(--main-color) cursor-pointer relative group transition-all duration-300 overflow-hidden shadow-[10px_10px_15px_#94949429]">
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
      <div className="product-icons text-(--main-color)! absolute top-1/2 -right-11 -translate-y-1/2 flex flex-col gap-3 group-hover:right-2 transition-all duration-300">
        <span className="text-xl rounded-full p-1.5 bg-[#ededed] hover:bg-[#ddd] transition-colors">
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
