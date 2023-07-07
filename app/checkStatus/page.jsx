"use client";
import { useState } from "react";
import Link from "next/link";

const productData = [
  {
    id: 1,
    name: "Firenxe",
    status: "New Arrival",
    price: "$100",
    img: "https://t3.ftcdn.net/jpg/02/60/22/68/240_F_260226888_aZ3EJOTSE2ly5TlRuseWexnVkK67KqBl.jpg",
    category: "Shoe",
  },
  {
    id: 2,
    name: "McTavish",
    status: "Out of Stock",
    price: "$50",
    img: "https://t3.ftcdn.net/jpg/01/27/91/40/240_F_127914049_nNhICwaKeKFOty5dtrX8AIHWf2eYtkFW.jpg",
    category: "Shoe",
  },
  {
    id: 3,
    name: "Norwitch",
    status: "Summer Sale",
    price: "$90",
    img: "https://t3.ftcdn.net/jpg/00/98/33/16/240_F_98331626_bkP5clniyUjIL4eoAtZoh1bIIe6XxnGP.jpg",
    category: "Shoe",
  },
  {
    id: 4,
    name: "Park Avenue",
    status: "Upcoming",
    price: "$110",
    img: "https://t3.ftcdn.net/jpg/00/58/24/54/240_F_58245420_KriXmYEczt258DvW4WmSRgeYpG5eUIZf.jpg",
    category: "Shoe",
  },
  {
    id: 5,
    name: "San Marco",
    status: "Sold",
    price: "$80",
    img: "https://t4.ftcdn.net/jpg/03/52/46/23/240_F_352462397_CyW2KFWRxoJCxAXCDbzGfEadXuZRIXcL.jpg",
    category: "Shoe",
  },
  {
    id: 6,
    name: "Lucca",
    status: "New Arrival",
    price: "$60",
    img: "https://t3.ftcdn.net/jpg/00/82/88/66/240_F_82886619_a4xje5obM5bAajAjnx6ZzWb0Is70kSQA.jpg",
    category: "Shoe",
  },
  {
    id: 7,
    name: "Delray",
    status: "Summer Sale",
    price: "$70",
    img: "https://t3.ftcdn.net/jpg/00/80/99/12/240_F_80991282_o4Rb7zOlhCy8MlBUkIN5axRS2sdKpUJU.jpg",
    category: "Shoe",
  },
  {
    id: 8,
    name: "McGraw",
    status: "Out of Stock",
    price: "$120",
    img: "https://t4.ftcdn.net/jpg/01/43/45/77/240_F_143457749_3x7KtQlCL9sDzbRShBAPXLzHrNoZwF7q.jpg",
    category: "Shoe",
  },
  {
    id: 9,
    name: "Hancock",
    status: "Upcoming",
    price: "$75",
    img: "https://media.istockphoto.com/id/477850598/photo/sport-shoes.jpg?s=612x612&w=0&k=20&c=Pk3XBtR7Q6twhW96ntjyAH1OpxsuCJJfVB5x2nMIh0k=",
    category: "Shoe",
  },
  {
    id: 10,
    name: "Boot",
    status: "Sold",
    price: "$79",
    img: "https://img.freepik.com/free-photo/brown-leather-shoes_1203-7562.jpg?size=626&ext=jpg&ga=GA1.2.1268318720.1687747546&semt=sph",
    category: "Shoe",
  },
];

const statusNames = [
  { id: 1, name: "New Arrival" },
  { id: 2, name: "Out of Stock" },
  { id: 3, name: "Summer Sale" },
  { id: 4, name: "Upcoming" },
  { id: 5, name: "Sold" },
];

const ProductStatus = () => {
  const [statuses, setStatuses] = useState(productData);
  const filterStatus = item => {
    const result = productData.filter(data => {
      return data.status === item;
    });
    setStatuses(result);
  };
  return (
    <div className="mt-20 mx-auto">
      <h1 className="flex flex-row justify-center mt-28 mb-8 text-3xl text-teal-700 font-bold text-center">
        Filter Products by Status
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-1 mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </h1>

      {/* tabs section */}
      <div className="mt-12 mx-16 flex flex-wrap">
        {statusNames?.map(statusName => (
          <p
            className={`text-lg text-teal-700 cursor-pointer mx-1 mb-2 p-3 font-bold
             ${
               statuses[0].status === statusName.name &&
               "border-b-2 border-teal-700"
             }`}
            key={statusName.id}
            onClick={() => filterStatus(statusName.name)}
          >
            {statusName.name}
          </p>
        ))}
      </div>
      {/* tabs */}

      {/* table section */}
      <div className="w-full sm:hidden md:hidden lg:inline-block xl:inline-block 2xl:inline-block mt-12 text-md font-semibold">
        <table class="table-auto text-left w-screen">
          <thead className="px-6 bg-gray-100 border-1 border-gray-200 rounded">
            <tr>
              <th className="p-3 text-md font-semibold text-sm text-left">
                Image
              </th>
              <th className="p-3 text-sm font-semibold   text-left">Name</th>
              <th className="p-3 text-sm font-semibold   text-left">Price</th>
              <th className="p-3 text-sm font-semibold   text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {statuses?.map(product => (
              <tr>
                <td>
                  <img className="h-14 w-16" src={product.img} />
                </td>
                <td>
                  <p>{product.name}</p>
                </td>
                <td>
                  <p>{product.price}</p>
                </td>
                <td>
                  <p>{product.status}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* products card section */}
      {/* <div className="sm:inline-block md:inline-block lg:hidden xl:hidden 2xl:hidden mx-16 mt-4 mb-12 grid w-auto sm:grid-cols-1 md:grid-cols-2 gap-5 ">
        {statuses?.map(product => (
          <div
            key={product.id}
            className="bg-white h-full w-full rounded-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-col gap-6 justify-between align-center leading-normal"
          >
            <div>
              <img className="mb-6 h-full w-full" src={product.img} />
              <p className="text-gray-600 font-bold text-base mb-2">
                {product.name}
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-2xl font-bold text-teal-800 leading-none">
                  {product.price}
                </p>
                <p className="mt-2 italic text-base text-gray-600">
                  Status: {product.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="sm:inline-block md:inline-block lg:hidden xl:hidden 2xl:hidden mx-16 mt-4 mb-12 grid w-auto sm:grid-cols-1 md:grid-cols-2 gap-5">
        {statuses?.map(product => (
          <div className="bg-white h-full w-full border hover:drop-shadow-xl rounded-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between align-center leading-normal gap-4">
            <div>
              <img className="mb-6 h-60 md:h-64 w-full" src={product.img} />
              <Link href="">
                <span className="text-gray-600 font-bold text-base mb-2">
                  {product.name}
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-2xl font-bold text-teal-800 leading-none">
                  ${product.price}
                </p>
                <p className="mt-2 italic text-base text-gray-600">
                  {product.status}
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Link href="">
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
                <Link href="">
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
        ))}
      </div>
    </div>
  );
};
export default ProductStatus;
