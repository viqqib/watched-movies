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

const MovieCard = ({ movie }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("is in view", isInView);
  }, [isInView]);

  return (
    <motion.div 
      whileHover={{ scale: 1.1, x: 20  }}
      ref={ref}
      className="w-full h-[190px] md:h-[200px] flex md:w-[500px] shadow-custom-light rounded-md"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3 }}

    >
      <div className="">
        <div className="w-[128.38px]">
          <img src={movie.Poster} className="w-[128.38px] h-[190px] md:h-[200px]  rounded-md" alt="" />
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

      <div className="md:ml-4 px-3  mt-2 md:flex md:flex-col md:justify-center md:mt-0 w-full md:w-[300px]">
        <h1 className="-mt-1 md:text-xl text-primary font-semibold">{movie.Title}</h1>
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

        <p className="text-[0.65rem] md:text-[0.75rem] text-secondary mt-2 leading-3">{truncateText(movie.Plot, 130)}</p>

        <p className="text-[0.65rem] md:text-[0.8rem] text-primary leading-4 mt-2">Read my notes, or go to the IMDb for details and reviews.</p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
