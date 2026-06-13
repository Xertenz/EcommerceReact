import { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import SlideProducts from "../../components/SlideProducts/SlideProducts";
import SlideProductsLoading from "../../components/SlideProducts/SlideProductsLoading";

const categories: string[] = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];

interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
}

interface ProductsState {
  [categoryName: string]: Product[];
}

const Home: React.FC = (): React.ReactNode => {
  const [products, setProducts] = useState<ProductsState>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("Error in fetching categories...", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <HeroSlider />
      {loading
        ? categories.map((category) => <SlideProductsLoading key={category} />)
        : categories.map((category) => (
            <SlideProducts
              key={category}
              title={category.replace("-", " ")}
              data={products[category] || []}
            />
          ))}
    </>
  );
};

export default Home;
