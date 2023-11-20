"use client"
import { NavLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState, useEffect } from "react"
import Transition from "./Transition"

const Navigation = () => {
  const [isRouting, setIsRouting] = useState<boolean>(false)
  const path = usePathname()
  const [prevPath, setPrevPath] = useState<string>("/")

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true)
    }
  }, [path, prevPath])

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path)
      const timeout = setTimeout(() => {
        setIsRouting(false)
      }, 1200)
      return () => clearTimeout(timeout)
    }
  }, [isRouting, path])

  return (
    <>
      {isRouting && <Transition />}
      <div className="fixed z-[50] left-1/2 -translate-x-1/2 rounded-full w-[500px] bottom-10 flex justify-between items-center border bg-black border-white px-10 py-7">
        {NavLinks.map((nav) => (
          <Link key={nav.name} href={nav.link}>
            <nav.icon
              className={`w-[22px] h-[22px] ${
                path === nav.name ? "text-purple-800" : "text-white"
              }`}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Navigation
