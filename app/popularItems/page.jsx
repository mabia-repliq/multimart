"use client";

import { useQuery } from "@tanstack/react-query";
import ProductCard from "../productCard/page";

export default function PopularItems() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => data),
  });

  if (data && isLoading) {
    return (
      <p className="mt-44 text-center mx-6 text-5xl text-teal-700 text-bold">
        Loading...
      </p>
    );
  }

  return (
    <div>
      <h1 className="mt-36 mb-8 text-3xl text-teal-900 font-bold text-center">
        Our Popular Items
      </h1>

      <div className="mx-16 mb-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.products?.slice(12, 18).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
