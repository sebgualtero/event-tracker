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
    <main className="bg-slate-500 rounded-md">
      <nav></nav>
      <div class="row">
        <div class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" id="autocomplete-input" class="autocomplete"/>
              <label for="autocomplete-input">Enter your city</label>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-400 border-4 m-3 rounded-md">
        <EventList />
      </div>
    </main>
  );
}
