import Product from "./Product";
import "./SlideProducts.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

type Item = {
  id: number;
  images: string[];
  title?: string;
  price: number;
  availabilityStatus?: string;
  brand?: string;
  description?: string;
  stock?: string;
  category?: string;
  quantity: number;
};

type Props = {
  title: string;
  data: Item[];
};

function SlideProducts({ title, data }: Props) {
  return (
    <section className="slide-products">
      <div className="container mx-auto">
        <div className="top-slide relative mb-5 border-b border-b-(--border-color) p-3 ps-0 after:content-[''] after:block after:absolute after:bg-(--main-color) after:bottom-0 after:h-0.5 after:w-32">
          <h2 className="capitalize text-[30px] text-(--main-color)! font-bold mb-2">
            {title}
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
            eaque.
          </p>
        </div>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000, // Time between slides in ms
            disableOnInteraction: false, // Continue autoplay after user interactions
          }}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Product item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default SlideProducts;
