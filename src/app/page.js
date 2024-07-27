'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from '@/components/Header';
import MovieCard from "@/components/MovieCard";
import movieData from '@/utils/data';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const apiKey = '4d08b29'; // Replace with your OMDb API key

  useEffect(() => {
    // Function to fetch movie data by title
    const fetchMovieData = async (title) => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching data for ${title}:`, error);
        return null;
      }
    };

    // Fetch data for all movies
    const fetchAllMovies = async () => {
      const movieDataPromises = movieData.map(movie => fetchMovieData(movie.title));
      const movieResponses = await Promise.all(movieDataPromises);
      setMovies(movieResponses.filter(response => response !== null));
    };

    fetchAllMovies();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className="px-5 mt-1 flex w-full gap-2">
          <input type="text" className="py-2 px-2 w-full rounded-md bg-gray-200" name="" id="" />
          <button className="py-2 w-14 bg-gray-200 rounded-md"></button>
          <button className="py-2 w-14 bg-gray-200 rounded-md"></button>
        </div>
        <div className="px-5 mt-5 md:flex md:flex-wrap md:gap-5" >
          {movies.map((movie, index) => (
            <div className="mt-2 moviecard" key={index}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
