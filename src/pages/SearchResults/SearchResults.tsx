import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageTransition from "../../components/PageTransition/PageTransition";
import SlideProductsLoading from "../../components/SlideProducts/SlideProductsLoading";
import Product from "../../components/SlideProducts/Product";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  images: string[];
}

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");

  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await res.json();
        setSearchResults(data.products || []);
        setLoading(false);
      } catch (error) {
        console.log("Error in searching product...", error);
      }
    };
    if (searchTerm) fetchResults();
  }, [searchTerm]);

  return (
    <PageTransition key={searchTerm}>
      <div className="category-products mt-12">
        <div className="container mx-auto">
          {loading ? (
            <SlideProductsLoading />
          ) : searchResults.length ? (
            <div className="category-products-wrapper">
              <div className="top-slide relative mb-5 border-b border-b-(--border-color) p-3 ps-0 after:content-[''] after:block after:absolute after:bg-(--main-color) after:bottom-0 after:h-0.5 after:w-32">
                <h2 className="capitalize text-[30px] text-(--main-color)! font-bold mb-2">
                  Results for {searchTerm}
                </h2>
              </div>
              <div className="category-products flex justify-between items-center gap-12 flex-wrap">
                {searchResults.map((item) => (
                  <Product key={item.id} item={item} />
                ))}
              </div>
            </div>
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default SearchResults;
