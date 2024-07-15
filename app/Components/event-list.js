"use-client";

import React, { useEffect, useState } from "react";

export default function EventList() {
  const [events, setEvents] = useState([]);
  // const apikey = process.env.REACT_APP_API_KEY;

  // console.log(apikey);

  const city = "calgary";

  let cleanedCity = city.replace(" ", "%20");

  async function getEvents() {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?city=${cleanedCity}&apikey=GtIAGHvyMJ5t1uTNSvG2sU6TwnePUGEF`
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
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.dates.start.localDate}</p>
          <p>{event.dates.start.localTime}</p>
          <p>{event._embedded.venues[0].name}</p>
          <p>{event._embedded.venues[0].city.name}</p>
          <p>{event._embedded.venues[0].state.name}</p>
          <p>{event._embedded.venues[0].country.name}</p>
          <p>
            ----------------------------------------------------------------------
          </p>
        </div>
      ))}
    </div>
  );
}
