import "./ProductDetailsLoading.css";

const ProductDetailsLoading = () => {
  return (
    <section className="product-details-loading mt-10">
      <div className="container mx-auto">
        <div className="wrapper flex gap-8">
          <div className="imgs-item skeleton w-1/2! h-80 bg-gray-200 rounded"></div>
          <div className="item-details w-1/2! flex flex-col gap-3">
            <p className="skeleton rounded bg-gray-200 h-8"></p>
            <p className="skeleton rounded bg-gray-200 h-8"></p>
            <p className="skeleton rounded bg-gray-200 h-8"></p>
            <p className="skeleton rounded bg-gray-200 h-8"></p>
            <p className="skeleton rounded bg-gray-200 h-8"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsLoading;
