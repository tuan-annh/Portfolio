"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { SkillData } from "@/constants"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import Image from "next/image"
const SkillPage = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen flex w-screen justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center mt-[10%]">
        <span className="text-white font-semibold text-[50px] animate-bounce">
          Skills{" "}
          <span className="text-[50px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          Technologies
        </span>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          modules={[Autoplay]}
          className="max-w-[95%] md:max-w-[70%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                alt={skill.name}
                src={skill.Image}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={4000}
          modules={[Autoplay]}
          className="max-w-[95%] md:max-w-[70%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                alt={skill.name}
                src={skill.Image}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SkillPage
