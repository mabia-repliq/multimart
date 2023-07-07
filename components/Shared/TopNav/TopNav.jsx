"use client";
import Link from "next/link";

export default function TopNav() {
  let leftTabs = [
    { name: "Products", link: "/products" },
    // { name: "Status", link: "/Status" },
  ];
  let rightTabs = [
    { name: "Login", link: "/login" },
    { name: "Register", link: "/register" },
  ];

  return (
    <div className="py-3 px-5 flex flex-row justify-between z-10 bg-white shadow-lg top-0  w-full fixed">
      <div className="flex gap-6 items-center justify-left">
        <div
          className="font-bold text-2xl cursor-pointer items-center 
      text-gray-800"
        >
          <Link href="/">
            <p className="flex text-2xl text-teal-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mt-1 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Multimart
            </p>
          </Link>
        </div>

        <ul className="mt-1 flex gap-4">
          {leftTabs?.map(link => (
            <li key={link.name} className="font-medium">
              <Link
                href={link.link}
                className="text-teal-700  hover:text-gray-500 duration-700"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-1 flex gap-4">
        {rightTabs?.map(link => (
          <li key={link.name} className="font-medium">
            <Link
              href={link.link}
              className="text-teal-700  hover:text-gray-500 duration-700"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
