"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  const { id, title, thumbnail, price, discountPercentage } = product;

  return (
    <div className="bg-white h-full w-full border hover:drop-shadow-xl rounded-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between align-center leading-normal gap-4">
      <div>
        <img className="mb-6 h-60 md:h-64 w-full" src={thumbnail} />
        <Link href={`/products/${id}`}>
          <span className="text-gray-600 font-bold text-base mb-2">
            {title}
          </span>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="text-sm">
          <p className="text-2xl font-bold text-teal-800 leading-none">
            ${price}
          </p>
          <p className="mt-2 italic text-base text-gray-600">
            Get<span className="font-bold"> {discountPercentage}% </span>
            Discount
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link href={`/products/${id}`}>
            <button
              className="flex flex-row bg-teal-700 sm:px-2 sm:py-1 md:px-2 md:py-1 lg:px-3 lg:py-2 hover:bg-teal-900 text-white font-bold rounded bottom-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
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
          <Link href={`/products/${id}`}>
            <button
              className="flex flex-row text-base border border-gray-300 text-gray-600 sm:px-2 sm:py-1 md:px-2 md:py-1 lg:px-3 lg:py-2 hover:bg-gray-100 font-bold rounded bottom-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              View Details
            </button>
          </Link>
        </div>
        {/* wishlist button */}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-teal-800 hover:text-teal-900 mt-2 w-6 h-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
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
  );
}
