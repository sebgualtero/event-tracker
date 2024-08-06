"use client";

import Link from "next/link";
import EventList from "./Components/event-list";
import SearchBar from "./Components/search-bar";
import { useState } from "react";
import About from "./Components/about";
import { useUserAuth } from "./_utils/auth-context";

export default function Home() {
  const [city, setCity] = useState("calgary");
  const [category, setCategory] = useState("all"); // Add state for category

  const handleSearch = (city) => {
    setCity(city);
  };
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="bg-slate-300 rounded-md dark:bg-slate-800">
      <nav className="flex flex-col items-center justify-center mt-4">
        <div className="border-cyan-300 mb-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
            Event Finder
          </h1>
        </div>
        <div className="absolute top-4 left-4">
          {user ? (
            <button
              onClick={handleSignOut}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={handleSignIn}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Login
            </button>
          )}
        </div>
        <div>
          <h2 className="text-lg font-medium leading-7 text-cyan-700">
            Find events near you anytime in a few clicks
          </h2>
        </div>
      </nav>
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <p className="text-sm text-gray-900 dark:text-gray-300">
          Choose a category:
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setCategory("all")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          All
        </button>
        <button
          onClick={() => setCategory("music")}
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Music
        </button>
        <button
          onClick={() => setCategory("sports")}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Sports
        </button>
        <button
          onClick={() => setCategory("arts & theatre")}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-red font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Arts & Theatre
        </button>
      </div>

      <div className="bg-slate-400 border-4 m-3 rounded-md"></div>
      <div className="row ml-3">
        <EventList city={city} category={category} />
      </div>
      <footer><About /></footer>
    </main>
  );
}