import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SlideProductsLoading from "../../components/SlideProducts/SlideProductsLoading";
import ProductComponent from "../../components/SlideProducts/Product";
import PageTransition from "../../components/PageTransition/PageTransition";

type ProductType = {
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

type CategoryData = {
  products: ProductType[];
  limit: number;
};

const Category = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  const [categoryProducts, setCategoryProducts] = useState<CategoryData | null>(
    null
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        const data = await res.json();
        setCategoryProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("error in fetching categories:", error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, [category]);

  return (
    <PageTransition key={category}>
      <section className="category-products">
        <div className="container mx-auto">
          {loading || !categoryProducts ? (
            <SlideProductsLoading />
          ) : (
            <div className="category-products-wrapper">
              <div className="top-slide relative mb-5 border-b border-b-(--border-color) p-3 ps-0 after:content-[''] after:block after:absolute after:bg-(--main-color) after:bottom-0 after:h-0.5 after:w-32">
                <h2 className="capitalize text-[30px] text-(--main-color)! font-bold mb-2">
                  {category?.replace("-", " ")} ({categoryProducts.limit})
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore, eaque.
                </p>
              </div>
              <div className="category-products flex justify-between items-center gap-12 flex-wrap">
                {categoryProducts.products.map((item) => (
                  <ProductComponent key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Category;
