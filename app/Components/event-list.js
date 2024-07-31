"use client";

import React, { useEffect, useState } from "react";

export default function EventList({ city }) {
  const [events, setEvents] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY;

  useEffect(() => {
    async function getEvents() {
      try {
        if (city) {
          let cleanedCity = city.replace(" ", "%20");
          const response = await fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?city=${cleanedCity}&apikey=${apiKey}`
          );

          const data = await response.json();

          if (data._embedded) {
            //sorts the events by date
            data._embedded.events.sort((a, b) => {
              let dateA = new Date(a.dates.start.localDate);
              let dateB = new Date(b.dates.start.localDate);
              return dateA - dateB;
            });
            setEvents(data._embedded.events);
          } else {
            setEvents([]);
          }
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    }

    getEvents();
  }, [city]);

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {events.length > 0 ? (
          events.map((event) => (
            <li
              key={event.id}
              className="flex justify-between gap-x-6 py-5 m-3"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  alt=""
                  src={event.images[0].url}
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                    {event.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {event._embedded.venues[0].name}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900 dark:text-gray-50">
                  {event._embedded.venues[0].city.name}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Time and Date <time>{event.dates.start.localDate}</time> at{" "}
                  {event.dates.start.localTime
                    ? event.dates.start.localTime.slice(0, 5)
                    : "TBA"}
                  {/* <a href={event.url} target="_blank" rel="noreferrer">
                    More Info
                  </a> */}
                </p>
              </div>
            </li>
          ))
        ) : (
          <p>No events found for {city}</p>
        )}
      </ul>
    </div>
  );
}
