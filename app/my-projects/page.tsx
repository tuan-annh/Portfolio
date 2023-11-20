"use client"

import { Projects } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const ProjectPage = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen flex flex-col gap-10 items-center w-screen bg-cover bg-center"
    >
      <span className="text-white text-[50px] animate-bounce mt-16">
        Amazing Projects
      </span>
      <div className="grid grid-cols-2 gap-10">
        {Projects.map((item, index) => (
          <div
            key={index}
            className="text-white relative group scale-100 hover:scale-105 duration-500 ease-in-out"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={500}
              height={400}
              className="rounded-md border border-white"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent group-hover:bg-black/50"></div>
            <div className="absolute translate-x-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out group-hover:translate-x-1 bottom-[50%] translate-y-1/2 text-xl ">
              <span className="">{item.content}</span>
              <div className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
                <Link
                  href={item.href}
                  target="_blank"
                  className="hover:cursor-pointer hover:text-blue-300"
                >
                  Link Demo Sản Phẩm
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
