"use client";

import Image from "next/image";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full relative mx-auto px-8 overflow-hidden">
      <div className="flex items-center gap-4">
        {cardsData.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="relative h-[400px] flex-1 overflow-hidden transition-[flex] duration-500 ease-[cubic-bezier(.05,.61,.41,.95)] rounded-md"
            style={{
              flex: activeIndex === index ? 3 : 1,
            }}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
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
  );
}
