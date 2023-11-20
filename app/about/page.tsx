"use client"

import Image from "next/image"
import Link from "next/link"
const AboutPage = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className="h-screen flex justify-center items-center w-screen bg-cover bg-center gap-24 px-5"
    >
      <div className="relative">
        <Image
          src="/image-about.png"
          alt="image-about"
          width={400}
          height={400}
          className="object-contain relative z-10"
        />
        <div className="absolute animate-ping rounded-full w-[250px] h-[250px] border-8 bottom-[60%] right-[60%]"></div>
        <div className="absolute animate-ping rounded-full w-[250px] h-[250px] border-8 bottom-[60%] left-[60%]"></div>
        <div className="absolute animate-ping rounded-full w-[250px] h-[250px] border-8 top-[60%] left-[60%]"></div>
        <div className="absolute animate-ping rounded-full w-[250px] h-[250px] border-8 top-[60%] right-[60%]"></div>
      </div>
      <div className="text-white gap-3 flex flex-col justify-center items-start text-2xl">
        <span>Xin chào, mình là Đinh Tuấn Anh </span>
        <span>
          <span className="font-bold">Ngày sinh: </span>04-10-2001
        </span>
        <span>
          <span className="font-bold">Giới tính: </span>Nam
        </span>
        <span>
          <span className="font-bold">Tốt nghiệp: </span>Trường đại học Công
          Nghiệp Hà Nội
        </span>
        <span>
          <span className="font-bold">Nghề nghiệp: </span>Lập trình viên Web
        </span>
        <Link
          href="/DinhTuanAnh_Intern_Front-End.pdf"
          className="flex justify-center items-center gap-2 px-6 mt-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
          download={true}
          target="_blank"
        >
          Download CV
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
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default AboutPage
