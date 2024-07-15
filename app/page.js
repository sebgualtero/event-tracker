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
    <main className="bg-slate-200 rounded-md">
      <nav></nav>
      <div class="row">
        <div class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <label for="autocomplete-input" className="text-gray-900">
                Enter your city
              </label>
              <br></br>
              <input type="text" id="autocomplete-input" class="autocomplete" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-400 border-4 m-3 rounded-md"></div>

      <div className="row">
        <EventList />
      </div>
    </main>
  );
}
