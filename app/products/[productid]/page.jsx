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
    <div className="mx-44">
      <div className="mt-28 w-auto md:h-fit lg:h-full py-12 bg-white border border-gray-200 flex justify-center align-center gap-2">
        <div className="ml-16">
          <img
            className="sm:w-64 md:w-1/2 lg:w-96 h-full rounded-3xl"
            src={data.thumbnail}
            alt="..."
          />
        </div>

        <div className="flex flex-col w-96">
          <div className="flex flex-row justify-between align-center">
            <p className="font-bold text-2xl text-teal-700 mb-2">
              {data.title}
            </p>
            <div className="flex gap-4">
              {/* share button */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </button>

              {/* wishlist button */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-110 text-teal-900 hover:text-teal-900 w-6 h-6"
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
          <p className="text-base text-justify text-gray-600">
            {data.description}
          </p>
          <div className="mt-5 flex text-sm">
            <div>
              <p className="text-2xl text-teal-700 font-bold leading-none">
                ${data.price}
              </p>
              <p className="text-lg mt-1 italic text-gray-600">
                Get{" "}
                <span className="font-semibold text-red-800">
                  {data.discountPercentage}%{" "}
                </span>
                Discount
              </p>
              <p className="text-lg mt-1 italic text-gray-600 flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-teal-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
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
          </div>
        </div>
      </div>
    </div>
  );
}
