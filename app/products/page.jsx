"use client";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../app/productCard/page";
import InputField from "../../components/Shared/InputField/InputField";
import { useEffect, useState } from "react";

const categories = [
  { id: 1, name: "Smartphones" },
  { id: 2, name: "Laptops" },
  { id: 3, name: "Fragrances" },
  { id: 4, name: "Skincare" },
  { id: 5, name: "Groceries" },
  { id: 6, name: "Home-decoration" },
  { id: 7, name: "Furniture" },
  { id: 8, name: "Tops" },
  { id: 9, name: "Womens-shoes" },
  { id: 10, name: "Lighting" },
  { id: 11, name: "Mens-shirts" },
  { id: 12, name: "Sunglasses" },
  { id: 13, name: "Motorcycle" },
];

export default function Products() {
  const [params, setParams] = useState("");
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState([]);
  const [active, setActive] = useState(false);

  const fetchProducts = () => {
    if (params || category) {
      return params
        ? fetch(`https://dummyjson.com/products/search?q=${params}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        : fetch(`https://dummyjson.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }
    return fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProduct(data));
  };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["products", params, category],
    queryFn: () => fetchProducts(),
  });

  useEffect(() => {
    refetch();
  }, [params, category]);

  const handleTabClick = tabName => {
    setActive(!active);
    setCategory(tabName);
    fetchProducts();
  };

  if (isLoading && data) {
    return (
      <p className="mt-44 text-center mx-8 text-5xl text-teal-700 text-bold">
        Loading...
      </p>
    );
  }

  return (
    <div className="container mx-auto">
      <h1 className="flex flex-row justify-center mt-28 mb-8 text-3xl text-teal-700 font-bold text-center">
        Browse All Categories
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
      <div className="mx-16 flex flex-wrap">
        {categories.map(category => (
          <p
            className={`border text-teal-700 border-teal-100 cursor-pointer shadow mx-1 mb-2 p-3 font-bold rounded-md  ${
              active === true ? "bg-teal-700 text-white" : "bg-white"
            }`}
            key={category.id}
            onClick={() => handleTabClick(category.name)}
          >
            {category.name}
          </p>
        ))}
      </div>
      {/* tabs */}

      {/* Search products button */}
      <div className="w-auto mx-16 mt-6 mb-6 px-1">
        <InputField
          name="searchProduct"
          id="searchProduct"
          type="text"
          value={params}
          placeholder="Search Product"
          onChange={event => {
            setParams(event.target.value);
          }}
        />
      </div>

      {/* products section */}
      <div className="mx-16 mb-12 grid w-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {product?.products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
