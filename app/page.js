"use client";

import Image from "next/image";
import EventList from "./Components/event-list";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");

  const manageCityChange = (event) => {
    setCity(event.target.value);
  };

  console.log(city);

  return (
    <main>
      <nav></nav>
      <form>
        <label>Enter your city: </label>
        <input
          type="text"
          className="color-black"
          onChange={manageCityChange}
        />
        <button>Search!</button>
      </form>
      <div>
        <EventList />
      </div>
    </main>
  );
}
