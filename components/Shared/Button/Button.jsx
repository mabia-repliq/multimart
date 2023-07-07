"use client";

export default function Button(props) {
  return (
    <div>
      <button className="mt-8 bg-teal-700 text-white font-bold py-6 px-8 rounded transition duration-300 ease-in-out hover:bg-teal-600 transform hover:-translate-y-1 hover:scale-110">
        {props.name}
      </button>
    </div>
  );
}
