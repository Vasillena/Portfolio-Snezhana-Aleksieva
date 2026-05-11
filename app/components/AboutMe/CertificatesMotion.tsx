"use client";

import Image from "next/image";
import arrowL from "@/public/arrow-l.svg";
import arrowR from "@/public/arrow-r.svg";
import { useState } from "react";

interface CardData {
  id: number;
  img: string;
  title: string;
}

export default function GalleryMotion({
  cardsData,
}: {
  cardsData: CardData[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="hidden sm:block w-full relative mx-auto px-8 overflow-hidden">
        <div className="flex items-center gap-4">
          {cardsData.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={`
  relative h-[400px] overflow-hidden transition-[flex] duration-500 ease-[cubic-bezier(.05,.61,.41,.95)] rounded-md 
  ${
    activeIndex === index
      ? "flex-[16] sm:flex-[5] md:flex-[9] lg:flex-[6] xl:flex-[3]"
      : "flex-1"
  }
`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className={`object-cover transition-all duration-500 ease-in-out
                ${
                  activeIndex === index
                    ? "grayscale-0"
                    : "grayscale hover:grayscale-0"
                }
              `}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="block sm:hidden relative w-full overflow-hidden">
        <div className="relative flex items-center justify-center h-[300px]">
          {cardsData.map((card, index) => {
            const offset = index - activeIndex;

            return (
              <div
                key={card.id}
                className={`
                absolute transition-all duration-500 ease-in-out
                rounded-md overflow-hidden
              `}
                style={{
                  transform: `
                  translateX(${offset * 25}%)
                  scale(${index === activeIndex ? 1 : 0.82})
                `,
                  zIndex: index === activeIndex ? 20 : 10,
                  opacity: Math.abs(offset) > 1 ? 0 : 1,
                }}
              >
                <div className="relative w-[200px] h-[300px]">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className={`
                    object-cover rounded-md transition-all duration-500
                    ${index === activeIndex ? "grayscale-0" : "grayscale"}
                  `}
                  />
                </div>
              </div>
            );
          })}

          <button onClick={prevSlide} className="absolute left-0 z-30 -ml-1">
            <Image
              src={arrowL}
              alt="Icon image"
              style={{
                minWidth: "42px",
                height: "auto",
              }}
            />
          </button>

          <button onClick={nextSlide} className="absolute right-0 z-30 -mr-1">
            <Image
              src={arrowR}
              alt="Icon image"
              style={{
                minWidth: "42px",
                height: "auto",
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
