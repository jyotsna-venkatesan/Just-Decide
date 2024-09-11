import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

import { useState } from "react";

import axios from "axios";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const [searchResult, setSearchResult] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/api/search", {
        query: searchQuery,
      });

      setSearchResult(response.data.response);
    } catch (error) {
      console.error("Error searching:", error);

      setSearchResult("An error occurred while processing your request.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative bg-custom-bg h-[calc(100vh-64px)] flex items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2">
        <div
          className="w-full h-full bg-gradient-to-br from-[#243E30] to-[#63A876] opacity-70 blur-3xl"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",

            transform: "scale(1.5) translate(-20%, -20%)",
          }}
        />
      </div>

      {/* Bottom-right blob */}

      <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
        <div
          className="w-full h-full bg-gradient-to-tl from-[#854558] to-[#AF8390] opacity-70 blur-3xl"
          style={{
            borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",

            transform: "scale(1.5) translate(20%, 20%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center relative">
          <div className="w-full lg:w-[60%] z-10">
            <h1 className="text-6xl text-left font-bold font-roboto-serif tracking-tight text-custom-light sm:text-7xl lg:text-8xl whitespace-nowrap">
              Not just any decision.
            </h1>

            <h1 className="mt-2 text-6xl text-left font-bold font-roboto-serif tracking-tight text-custom-green sm:text-7xl lg:text-8xl">
              A Just Decision.
            </h1>

            <p className="mt-6 text-standard text-left text-lg leading-8 text-inter text-custom-light max-w-3xl">
              Our AI-powered app helps you tackle complex ethical choices with
              confidence and integrity.
            </p>

            <form
              onSubmit={handleSearch}
              className="mt-8 flex flex-col sm:flex-row w-full max-w-4xl"
            >
              <label htmlFor="search-query" className="sr-only">
                Search
              </label>

              <div className="relative flex-grow">
                <input
                  type="text"
                  id="search-query"
                  name="search-query"
                  className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green sm:text-sm sm:leading-6"
                  placeholder="Try it now! Enter your ethical dilemma..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center rounded-md bg-custom-green px-6 py-3 font-medium text-white hover:bg-custom-green-dark focus:outline-none focus:ring-2 focus:ring-custom-green focus:ring-offset-2 whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span>Loading...</span>
                ) : (
                  <>
                    <MagnifyingGlassIcon
                      className="h-5 w-5 mr-2"
                      aria-hidden="true"
                    />
                    Search
                  </>
                )}
              </button>
            </form>

            {searchResult && (
              <div className="mt-6 p-4 bg-white rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-2">Result:</h2>

                <p>{searchResult}</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-[40%] mt-16 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
          <img
            alt="Philosopher statue"
            src="/philosopher-statue.png"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
