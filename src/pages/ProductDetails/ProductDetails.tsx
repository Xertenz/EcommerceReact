import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { useParams } from "react-router-dom";
import SlideProducts from "../../components/SlideProducts/SlideProducts";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductsLoading from "../../components/SlideProducts/SlideProductsLoading";

type Product = {
  images: string[];
  title: string;
  price: number;
  availabilityStatus: string;
  brand: string;
  description: string;
  stock: string;
  category: string;
};

const ProductDetails: React.FC = (): React.ReactNode => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);
  const [currentImg, setCurrentImg] = useState<string>("");

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] =
    useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setCurrentImg(data.images[0]);
      } catch (error) {
        console.error("error in fetching product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (!product) return;
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${product.category}`
        );
        const data = await res.json();
        setRelatedProducts(data.products);
      } catch (error) {
        console.error("error in fetching related categories: ", error);
      } finally {
        setLoadingRelatedProducts(false);
      }
    };

    fetchRelatedProducts();
  }, [product?.category]);

  if (loading) return <ProductDetailsLoading />;
  if (!product) return <p>Product not found....</p>;

  return (
    <section className="product-details">
      <div className="container mx-auto">
        <div className="flex items-center gap-8 my-8">
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
          <div className="item-details w-3/5!">
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
                Brand:{" "}
                <span className="text-(--main-color)">{product.brand}</span>
              </p>
              <p className="description leading-normal mb-5">
                {product.description}
              </p>
              <p className="stock mb-5 font-bold text-[22px] text-(--main-color)!">
                Hurry Up! Only <span>{product.stock}</span> products left in the
                stock
              </p>
              <button className="btn inline-flex items-center gap-2 align-middle bg-(--main-color) text-white mb-5 px-4 py-2 rounded cursor-pointer">
                <span>Add To Cart</span> <TiShoppingCart />
              </button>
              <br />

              <div className="icons inline-flex">
                <span className="text-xl rounded-full p-1.5 bg-[#ededed] hover:bg-(--main-color) hover:text-white transition-colors cursor-pointer">
                  <FaRegHeart />
                </span>
              </div>
            </div>
          </div>
        </div>
        {loadingRelatedProducts ? (
          <SlideProductsLoading />
        ) : (
          <div className="slide-products">
            <SlideProducts
              title={product.category.replace("-", " ")}
              data={relatedProducts}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
