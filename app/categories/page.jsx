"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import { Pagination, Grid } from "swiper";

export default function Categories() {
  //   const [swiperRef, setSwiperRef] = useState(null);
  const categories = [
    {
      name: "Smartphones",
      img: "https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Laptops",
      img: "https://img.freepik.com/free-photo/laptop-with-blank-black-screen-white-table_53876-97915.jpg?w=740&t=st=1687848082~exp=1687848682~hmac=96ddf71797acba2ed3f8d9e3d229be0668ab939b8923dacddb5a60148ad58796",
    },

    {
      name: "Fragrances",
      img: "https://img.freepik.com/free-photo/still-life-cosmetic-products_23-2149163109.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Skincare",
      img: "https://img.freepik.com/free-photo/black-girl-with-towel-head-has-eye-patches-isolated-white-background_1157-52269.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Groceries",
      img: "https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?size=626&ext=jpg&ga=GA1.2.1268318720.1687747546&semt=sph",
    },
    {
      name: "Furniture",
      img: "https://img.freepik.com/free-photo/beautiful-home-with-healthy-green-plants_23-2149383712.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Home-decoration",
      img: "https://img.freepik.com/free-photo/cozy-background-with-books-vase-dried-flowers-decorative-cushes_169016-18267.jpg?size=626&ext=jpg&ga=GA1.2.1268318720.1687747546&semt=sph",
    },
    {
      name: "Tops",
      img: "https://img.freepik.com/free-photo/smiling-beautiful-young-woman-pink-mini-dress-posing-studio_155003-14602.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Women-dresses",
      img: "https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Women-shoes",
      img: "https://img.freepik.com/premium-photo/woman-blue-jeans-choosing-trying-shoes-home_220873-8723.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Mens-shirts",
      img: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Mens-shoes",
      img: "https://img.freepik.com/free-photo/elegant-black-leather-shoes-men-black-background-photo-studio-style-ai-generative_123827-23442.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Mens-watches",
      img: "https://img.freepik.com/free-photo/businessman-consulting-wristwatch_1262-18365.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Women-watches",
      img: "https://img.freepik.com/free-photo/middle-aged-woman-with-fitness-tracker_23-2148204478.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Women-bags",
      img: "https://img.freepik.com/free-photo/wome-s-bags-close-up_1303-13440.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Women-jewellery",
      img: "https://img.freepik.com/free-photo/shiny-gold-jewelry-symbol-wealth-generated-by-ai_188544-10733.jpg?size=626&ext=jpg&ga=GA1.2.1268318720.1687747546&semt=sph",
    },
    {
      name: "Sunglasses",
      img: "https://img.freepik.com/free-photo/vacation-glasses-optical-protection-sun_1172-365.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Automotive",
      img: "https://img.freepik.com/free-photo/car-mechanic-changing-wheels-car_1303-27465.jpg?size=626&ext=jpg&ga=GA1.2.1268318720.1687747546&semt=sph",
    },
    {
      name: "Motorcycle",
      img: "https://img.freepik.com/free-photo/motorcycle-with-helmet_23-2148875785.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph",
    },
    {
      name: "Lighting",
      img: "https://as1.ftcdn.net/v2/jpg/01/62/10/70/1000_F_162107063_e9DYpzS4rJAbPhvl4qFo5qKMIUpV9tWe.jpg",
    },
  ];

  //   let appendNumber = 20;
  //   let prependNumber = 1;

  //   const prepend2 = () => {
  //     swiperRef.prependSlide([
  //       '<div className="swiper-slide">Slide ' + --prependNumber + "</div>",
  //       '<div className="swiper-slide">Slide ' + --prependNumber + "</div>",
  //     ]);
  //   };

  //   const prepend = () => {
  //     swiperRef.prependSlide(
  //       '<div className="swiper-slide">Slide ' + --prependNumber + "</div>"
  //     );
  //   };

  //   const append = () => {
  //     swiperRef.appendSlide(
  //       '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>"
  //     );
  //   };

  //   const append2 = () => {
  //     swiperRef.appendSlide([
  //       '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //       '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>",
  //     ]);
  //   };

  return (
    <div>
      <div className="container flex justify-center align-center">
        <h1 className="mt-16 mb-8 text-3xl text-teal-700 font-bold text-center">
          Browse All Categories
        </h1>

        <div className="mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mt-16 ml-3 w-6 h-6 text-teal-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      {/* swiper */}
      <div>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <img
              className="w-1/2"
              src="https://img.freepik.com/free-photo/creative-reels-composition_23-2149711507.jpg?size=626&ext=jpg&ga=GA1.1.1268318720.1687747546&semt=sph"
            />
            <p className="mt-4 text-teal-700 font-bold">Smartphones</p>
          </SwiperSlide> */}

          <SwiperSlide>
            <div>
              {categories.map(category => (
                <div key={category.name}>
                  <img className="w-1/2" src={category.img} />
                  <p className="mt-4 text-teal-700 font-bold">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}
