import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import SlideProducts from "../../components/SlideProducts/SlideProducts";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductsLoading from "../../components/SlideProducts/SlideProductsLoading";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

type Product = {
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
          <ProductImage
            product={product}
            currentImg={currentImg}
            setCurrentImg={setCurrentImg}
          />
          <ProductInfo product={product} />
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
