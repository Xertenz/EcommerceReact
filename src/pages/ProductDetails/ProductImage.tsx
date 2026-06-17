import React from "react";

type Props = {
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
  };
  currentImg: string;
  setCurrentImg: React.Dispatch<React.SetStateAction<string>>;
};

const ProductImage = ({ product, currentImg, setCurrentImg }: Props) => {
  return (
    <div className="imgs-item w-2/5! flex flex-col gap-4">
      <div className="big-img">
        <img
          src={currentImg}
          alt={product.title}
          className="w-[400px]! mx-auto"
        />
      </div>
      <div className="small-img">
        <div className="imgs-wrapper flex justify-between gap-2 overflow-auto ">
          {product.images.map((image, index) => (
            <div
              key={index}
              className="img-wrapper p-1 w-30! border border-(--border-color) cursor-pointer"
            >
              <img
                src={image}
                alt=""
                className="w-full"
                onClick={() => setCurrentImg(image)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
