'use client'
import React from "react";

const Header = () => {
    return(
        <div className="top-0 right-0 left-0  flex justify-center  flex-col h-24 px-5  ">
            <div className="flex w-full justify-between text-redmov">
                <h1 className="dmSerif text-3xl">Fiqqi</h1>
                <h1 className="dmSerif text-3xl">qq</h1>
            </div>
            <p className="mt-2 text-xl text-primary">Movies i've watch</p>
        </div>
    )
}

export default Header;