"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function ProductId({ params }) {
  console.log(params);
  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://dummyjson.com/products/${params.productid}`).then(res =>
        res.json()
      ),
  });
  if (isLoading) {
    return (
      <p className="mt-44 text-center text-teal-700 mx-2 text-5xl text-bold">
        Loading...
      </p>
    );
  }

  return (
    <div className="py-12 bg-white border border-gray-200 w-auto mt-28 md:h-fit lg:h-96 m-8 flex sm:flex-row md:flex-row lg:flex-row justify-center align-center gap-4">
      <img
        className="sm:w-72 md:w-1/2 lg:w-96 h-100vh"
        src={data.thumbnail}
        alt="..."
      />

      <div className="mt-4 flex flex-col md:w-96">
        <div>
          <p className="font-bold text-teal-700 text-xl mb-2">{data.title}</p>
          <p className="text-lg text-gray-600">{data.description}</p>
        </div>

        <div className="mt-5 flex text-sm">
          <div>
            <p className="text-2xl text-teal-700 font-bold leading-none">
              ${data.price}
            </p>
            <p className="text-lg mt-1 italic text-gray-600">
              Get {data.discountPercentage}% Discount
            </p>
            <p className="text-lg mt-1 italic text-gray-600">
              {data.stock} In Stock
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3 justify-left align-center">
          {/* add to cart button */}
          <Link href="">
            <button
              className=" transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-110 flex flex-row bg-teal-700 px-3 py-2 hover:bg-teal-900 text-white font-bold rounded bottom-2"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Add To Cart
            </button>
          </Link>
          {/* back to home button */}
          <Link href="/products">
            <button
              className=" transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-110 flex flex-row border border-gray-400 bg-gray-200 px-3 py-2 hover:bg-gray-500 text-teal-700 hover:text-white font-bold rounded bottom-2"
              type="submit"
            >
              View all Products
            </button>
          </Link>
          {/* wishlist button */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-110 text-teal-900 hover:text-teal-900 mt-2 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
