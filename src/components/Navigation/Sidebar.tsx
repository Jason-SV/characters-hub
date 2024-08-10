'use client'
import { CaretLeftIcon, CaretRightIcon, HeartFilledIcon, HomeIcon, Pencil2Icon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";

export default function Sidebar ({isCollapse, toggleCollapse} : {isCollapse: boolean, toggleCollapse: MouseEventHandler}) {
    return (
        <div className={`flex flex-col bg-mint-two fixed left-0 h-screen z-50 mt-12 items-center justify-start transition-all duration-150 ${isCollapse? "w-12" : "w-48"}`}>
            <button className="absolute top-8 right-0 rounded-full bg-mint-three hover:bg-mint-four w-8 h-8 flex justify-center items-center translate-x-4"
            onClick={toggleCollapse}>
                {
                    isCollapse ? <CaretRightIcon/> : <CaretLeftIcon/>
                }
            </button>
            <Link href={'/home'} className="border-mint-three hover:bg-mint-three border-b-2 flex items-center h-12 w-full">
                <button className="ml-4 flex items-center gap-2">
                    <HomeIcon className="inline-block"/>
                    <span className={`transition-opacity duration-150 ${isCollapse? "opacity-0" : "opacity-100"}`}>Home</span>
                </button>
            </Link>
            <Link href={'/home'} className="border-mint-three hover:bg-mint-three border-b-2 flex items-center h-12 w-full">
                <button className="ml-4 flex items-center gap-2">
                    <HeartFilledIcon className="inline-block"/>
                    <span className={`transition-opacity duration-150 ${isCollapse? "opacity-0" : "opacity-100"}`}>Favorites</span>
                </button>
            </Link>
            <Link href={'/home'} className="border-mint-three hover:bg-mint-three border-b-2 flex items-center h-12 w-full">
                <button className="ml-4 flex items-center gap-2">
                    <PersonIcon className="inline-block"/>
                    <span className={`transition-opacity duration-150 ${isCollapse? "opacity-0" : "opacity-100"}`}>Followed</span>
                </button>
            </Link>
            <Link href={'/home'} className="border-mint-three hover:bg-mint-three border-b-2 flex items-center h-12 w-full">
                <button className="ml-4 flex items-center gap-2">
                    <Pencil2Icon className="inline-block"/>
                    <span className={`transition-opacity duration-150 ${isCollapse? "opacity-0" : "opacity-100"}`}>Create</span>
                </button>
            </Link>
        </div>   
    )
}