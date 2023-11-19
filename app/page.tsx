"use client"
import Image from "next/image"

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="mx-auto pt-28 flex flex-col gap-5 z-[10] max-w-[750px]">
          <Image
            src="/my-image.png"
            width={250}
            height={250}
            alt="my-image"
            className="rounded-full mx-auto  border-8 "
          />
          <h1 className="text-[50px] text-center text-white font-semibold">
            Đinh Tuấn Anh
          </h1>
          <p className="text-[50px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 animate-bounce">
            Front-End Development
          </p>
        </div>
        <div className="absolute bottom-0 right-0 z-[1] ">
          <Image
            src="/horse.png"
            alt="horse"
            height={300}
            width={300}
            className="absolute right-56 top-40"
          />
          <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
        </div>

        <div className="absolute bottom-0">
          <Image
            src="/trees.webp"
            alt="trees"
            width={2000}
            height={2000}
            className=""
          />
        </div>
      </div>
    </main>
  )
}
