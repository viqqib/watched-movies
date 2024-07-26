'use client'
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import movieData from '@/utils/data'; // Adjust the path if necessary


const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

const MovieCard = ({ movie }) => {
    
  return (
    <div className="w-full h-[160px] flex">
      <div className="">
        <div className="relative w-[107px]">
          <Image
            src={movie.Poster}
            layout="responsive"
            width={27} // Adjust these values based on your image aspect ratio
            height={40} // Adjust these values based on your image aspect ratio
            alt={movie.Title}
            loading="lazy"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="ml-4 w-[230px]">
        <h1 className="-mt-1 text-primary font-semibold">{movie.Title}</h1>
        <div className="">
          <table className="min-w-11/12 mt-2">
            <tbody>
              <tr className="">
                <td className="whitespace-nowrap w-4 text-[0.65rem] font-medium text-secondary">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </td>
                <td className="whitespace-nowrap w-10 text-[0.65rem] text-secondary font-medium">Date Watched</td>
                <td className="whitespace-nowrap text-[0.65rem] text-secondary font-medium px-1">:</td>
                <td className="whitespace-nowrap text-[0.65rem] text-secondary font-medium">{movie.date}</td>
              </tr>
              <tr className="">
                <td className="whitespace-nowrap text-[0.65rem] font-medium text-secondary">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </td>
                <td className="whitespace-nowrap text-[0.65rem] text-secondary font-medium">My Rating</td>
                <td className="whitespace-nowrap text-[0.65rem] text-secondary font-medium px-1">:</td>
                <td className="whitespace-nowrap text-[0.65rem] text-secondary font-medium">{movie.rate}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[0.65rem] text-secondary mt-2 leading-3">{truncateText(movie.Plot, 130)}</p>

        <p className="text-[0.7rem] text-primary leading-4 mt-2">Read my notes, or go to the IMDb for details and reviews.</p>
      </div>
    </div>
  );
};

export default MovieCard;
