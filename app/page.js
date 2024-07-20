"use client";

import Image from "next/image";
import EventList from "./Components/event-list";
import SearchBar from "./Components/search-bar";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");

  const manageCityChange = (event) => {
    setCity(event.target.value);
  };

  console.log(city);


  return (
    <main className="bg-slate-200 rounded-md">
      <nav></nav>

      <div>
        <SearchBar />
      </div>

      <div className="bg-slate-400 border-4 m-3 rounded-md"></div>

      <div className="row ml-3">
        <EventList />
      </div>
    </main>
  );
}
