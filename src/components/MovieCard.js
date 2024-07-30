'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import movieData from '@/utils/data'; // Adjust the path if necessary

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

const truncateRatinggText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}`;
};

const MovieCard = ({ movie }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("is in view", isInView);
  }, [isInView]);

  return (
    <motion.div 
      whileHover={{ scale: 1.05, x: 1  }}
      ref={ref}
      className="w-full h-[182px] md:h-[200px] flex md:w-[440px] justify-between shadow-custom-light rounded-md dark:bg-black"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}

    >
      <div className="">
        <div className="w-[128.38px]">
          <img src={movie.Poster} className="w-[120.38px] h-[182px] md:h-[200px] md:w-[135.14px] rounded-md" alt="" />
          {/* <Image
            src={movie.Poster}
            layout="responsive"
            width={27} // Adjust these values based on your image aspect ratio
            height={40} // Adjust these values based on your image aspect ratio
            alt={movie.Title}
            loading="lazy"
            className="rounded-md"
          /> */}
        </div>
      </div>

      <div className="md:ml-1 pr-3 mt-2 md:flex md:flex-col md:justify-center md:mt-0 w-full md:w-[300px]">
        <h1 className="-mt-1 text-[1rem] md:text-xl text-primary font-semibold">{truncateText(movie.Title,24)}</h1>
        <div className="">
          <table className="min-w-11/12 mt-1">
            <tbody>
              <tr className="">
                <td className="whitespace-nowrap md:text-[0.8rem] w-4 text-[0.65rem] font-medium text-secondary">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </td>
                <td className="whitespace-nowrap md:text-[0.8rem] w-10 text-[0.65rem] text-secondary font-medium">Date Watched</td>
                <td className="whitespace-nowrap md:text-[0.8rem] text-[0.65rem] text-secondary font-medium px-1">:</td>
                <td className="whitespace-nowrap md:text-[0.8rem] text-[0.65rem] text-secondary font-medium">{movie.date}</td>
              </tr>
              <tr className="">
                <td className="whitespace-nowrap md:text-[0.8rem] text-[0.65rem] font-medium text-secondary">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </td>
                <td className="whitespace-nowrap md:text-[0.8rem] text-[0.65rem] text-secondary font-medium">My Rating</td>
                <td className="whitespace-nowrap md:text-[0.8rem] text-[0.65rem] text-secondary font-medium px-1">:</td>
                <td className="whitespace-nowrap md:text-[0.8rem] text-[0.65rem] text-secondary font-medium">{movie.rate}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[0.65rem] dis md:text-[0.75rem] text-secondary mt-2 leading-3">{truncateText(movie.Plot,125)}</p>

        <div className="mt-2 flex gap-3">
          <div className="flex">
            <img src="/rt-icon.svg" className="md:w-5 w-4" alt="" />
            <p className="text-gray-500 ml-1 text-sm font-bold">{movie.Ratings.find(rating => rating.Source === "Rotten Tomatoes")?.Value || "N/A" }</p>
          </div>

          <div className="flex">
            <img src="/imdb-icon.svg" className="md:w-5 w-4" alt="" />
            <p className="text-gray-500 ml-1 text-sm font-bold">
            {truncateRatinggText(movie.Ratings.find(rating => rating.Source === "Internet Movie Database")?.Value, 3)}
              { }</p>
          </div>


        </div>



        <p className="text-[0.8rem] md:text-[0.9rem] text-primary font-semibold leading-4 mt-2">Read my notes</p>

      </div>
    </motion.div>
  );
};

export default MovieCard;
