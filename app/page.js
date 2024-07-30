"use client";

import EventList from "./Components/event-list";
import SearchBar from "./Components/search-bar";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("calgary");

  const handleSearch = (city) => {
    setCity(city);
  };

  return (
    <main className="bg-slate-300 rounded-md dark:bg-slate-800">
      <nav></nav>
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <p className="text-sm text-gray-900 dark:text-gray-300">
          Choose a category:
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          All
        </button>
        <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          Music
        </button>
        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Sports
        </button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Arts & Theatre
        </button>
      </div>

      <div className="bg-slate-400 border-4 m-3 rounded-md"></div>
      <div className="row ml-3">
        <EventList city={city} />
      </div>
    </main>
  );
}
