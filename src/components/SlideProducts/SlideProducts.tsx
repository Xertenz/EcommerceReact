import Product from "./Product";

function SlideProducts() {
  return (
    <section className="slide-products">
      <div className="container mx-auto">
        <div className="top-slide relative mb-5 border-b border-b-(--border-color) p-3 ps-0 after:content-[''] after:block after:absolute after:bg-(--main-color) after:bottom-0 after:h-0.5 after:w-32">
          <h2 className="text-[30px] text-(--main-color)! font-bold mb-2">
            Lorem, ipsum dolor.
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
            eaque.
          </p>
        </div>

        <Product />
      </div>
    </section>
  );
}

export default SlideProducts;
