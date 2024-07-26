'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faStar } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



const MovieCard = () => {
    return(
        <div className="w-full flex">
            <div className="">
                <div className="w-30 h-40">
                    <Image
                    src="/totoro.jpg"
                    width={106}
                    height={106}
                    alt="Picture of the author"
                    className="rounded-md"
                    />
                </div>
            </div>

            <div className="pl-4">
                <h1 className="text-primary font-semibold text-lg">My Neighbor Totoro</h1>
               
                <div className="space-y-1">
                    <div className="text-[0.375rem] flex items-center">
                            <FontAwesomeIcon icon={faCalendarDays} size="2x" className="text-blue-500" />
                            <span className="text-[0.5rem]">January 4 2024</span>
                    </div>
                   

                    
                </div>
         
            </div>
        </div>
    )
}

export default MovieCard