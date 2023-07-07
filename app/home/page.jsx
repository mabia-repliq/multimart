"use client";

import Link from "next/link";
import PopularItems from "../popularItems/page";
import Services from "../services/page";
export default function Home() {
  return (
    <div>
      <div className=" bg-white px-16 mt-4 flex justify-between align-center py-12">
        <div className="md:ml-16b lg:mt-20 px-6 py-16">
          <p className="mb-8 text-teal-700">Trending product in 2023</p>
          <p className=" text-teal-800 sm:text-xl md:text-4xl lg:text-5xl xl:text-5xl font-bold">
            Get all your necessities under one roof
          </p>
          <Link href="/products">
            <button
              className="mt-16 bg-teal-700 text-white font-bold py-2 px-5 rounded transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
              type="submit"
            >
              Shop Now
            </button>
          </Link>
        </div>
        <div>
          <img
            className="sm:mt-8 md:mt-12 w-cover h-auto"
            src="https://img.freepik.com/free-vector/watercolor-background-shopping-bags-with-ribbon_23-2147599073.jpg?size=626&ext=jpg&ga=GA1.2.1268318720.1687747546&semt=ais"
          />
        </div>
      </div>
      <Services />
      <PopularItems />
    </div>
  );
}
