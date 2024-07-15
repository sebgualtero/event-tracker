"use-client";

import React, { useEffect, useState } from "react";

export default function EventList() {
  const [events, setEvents] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY;

  const city = "calgary";

  let cleanedCity = city.replace(" ", "%20");

  async function getEvents() {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?city=${cleanedCity}&apikey=${apiKey}`
      );

      const data = await response.json();

      console.dir(data);

      setEvents(data._embedded.events);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    // <div>
    //   {events.map((event) => (
    //     <div key={event.id}>
    //       <h2>{event.name}</h2>
    //       <p>{event.dates.start.localDate}</p>
    //       <p>{event.dates.start.localTime}</p>
    //       <p>{event._embedded.venues[0].name}</p>
    //       <p>{event._embedded.venues[0].city.name}</p>
    //       <p>{event._embedded.venues[0].state.name}</p>
    //       <p>{event._embedded.venues[0].country.name}</p>
    //       <p>
    //         ----------------------------------------------------------------------
    //       </p>
    //     </div>
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {events.map((event) => (
          <li key={event.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                alt=""
                src={event.images[0].url}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {event.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {event._embedded.venues[0].name}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {event._embedded.venues[0].city.name}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Time and Date <time>{event.dates.start.localDate}</time> at{" "}
                {event.dates.start.localTime}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
