const SlideProductsLoading = () => {
  return (
    <section className="slide-products-loading mb-22">
      <div className="container mx-auto">
        <div className="top-slide relative mb-12 border-b border-b-(--border-color) p-3 ps-0 after:content-[''] after:block after:absolute after:bg-(--main-color) after:bottom-0 after:h-0.5 after:w-32">
          <h2 className="skeleton h-8 w-60 bg-gray-200 mb-2"></h2>
          <p className="skeleton h-4 w-1/2 bg-gray-200"></p>
        </div>

        <div className="products-loading flex gap-[30px]">
          <div className="skeleton product h-65 w-50 bg-gray-200 rounded">
            <div className="product-img"></div>
          </div>
          <div className="skeleton product h-65 w-50 bg-gray-200 rounded">
            <div className="product-img"></div>
          </div>
          <div className="skeleton product h-65 w-50 bg-gray-200 rounded">
            <div className="product-img"></div>
          </div>
          <div className="skeleton product h-65 w-50 bg-gray-200 rounded">
            <div className="product-img"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideProductsLoading;
