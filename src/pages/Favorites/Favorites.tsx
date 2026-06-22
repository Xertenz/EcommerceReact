import { useContext } from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
import Product from "../../components/SlideProducts/Product";
import { CartContext } from "../../context/CartContext";
import "./Favorites.css";

const Favorites = () => {
  const context = useContext(CartContext);
  if (!context) {
    return <p>Error: CartContext not found.</p>;
  }
  const { favorites } = context;

  return (
    <PageTransition key={favorites.length}>
      <div className="category-products mt-8 mb-12">
        <div className="container mx-auto">
          {favorites.length ? (
            <div className="category-products-wrapper">
              <div className="top-slide relative mb-5 border-b border-b-(--border-color) p-3 ps-0 after:content-[''] after:block after:absolute after:bg-(--main-color) after:bottom-0 after:h-0.5 after:w-32">
                <h2 className="capitalize text-[30px] text-(--main-color)! font-bold mb-2">
                  Favorites:
                </h2>
              </div>
              <div className="category-products flex justify-between items-center gap-12 flex-wrap">
                {favorites.map((item) => (
                  <Product key={item.id} item={item} />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center py-8 text-gray-500">No favorites found</p>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Favorites;
