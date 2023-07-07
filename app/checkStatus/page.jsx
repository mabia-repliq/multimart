"use client";
import { useState } from "react";

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
    <div className="mt-20">
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
      <div className="mt-12 border-b mx-16 flex flex-wrap">
        {statusNames?.map(statusName => (
          <p
            className={`text-teal-700 cursor-pointer border-b-teal-100 mx-1 mb-2 p-3 font-bold rounded-md
             ${statuses[0].status === statusName.name && "bg-red-200"}`}
            key={statusName.id}
            onClick={() => filterStatus(statusName.name)}
          >
            {statusName.name}
          </p>
        ))}
      </div>
      {/* tabs */}

      {/* table section */}
      <div className="mt-12 flex justify-center">
        <table class="table-auto text-left">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
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

      {/* products section */}
      {/* <div className="mx-16 mt-4 mb-12 grid w-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {statuses?.map(product => (
          <div
            key={product.id}
            className="bg-white h-full w-full rounded-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between align-center leading-normal gap-4"
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
    </div>
  );
};
export default ProductStatus;
