"use client";

import Image from "next/image";
import EventList from "./Components/event-list";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");

  function manageCityChange() {
    setCity(document.getElementById("search").value);
  }

  console.log(city);

  return (
    <main>
      <nav></nav>
      <div>
        <EventList />
      </div>
    </main>
  );
}
