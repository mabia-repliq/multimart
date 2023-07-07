"use client";

const services = [
  {
    name: "Free Shipping",
    title: "No delivery charge",
  },
  {
    name: "Easy Returns",
    title: "Return within 7 days",
  },

  {
    name: "Secure Payment",
    title: "Pay via card or cash",
  },
];

export default function Services() {
  return (
    <div className="bg-teal-700 py-8">
      <div className="sm:mx-8 md:mx-20 lg:mx-40 grid grid-flow-cols grid-cols-3 gap-6">
        {services.map(service => (
          <div className="px-3 py-4 rounded text-teal-900 bg-teal-50 hover:shadow-2xl leading-normal transition duration-300 ease-in-out transform hover:-translate-y-1 hover:overflow-hidden hover:scale-110">
            <div key={service.name}>
              <div className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mt-1 mr-2 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-xl">{service.name}</p>
                  <p>{service.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
