"use client";

import React, { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  { text: "想像力という技術で、\n日常を鮮やかな物語へと書き換える。" },
  { text: "YES FICTIONは、\n新しい時代の価値観を実装します。" },
  { text: "Storytelling for humanity.\n物語で世界を繋ぐ。" },
];

export const MainVisual = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative h-[400px] w-full bg-[#f8f9fa] overflow-hidden">
      {/* Embla Viewport */}
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex h-full min-w-0 flex-[0_0_100%] items-center justify-center px-4"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] via-[#ffffff] to-[#fff0f6]" />
              <div className="z-10 w-full max-w-[850px] py-[55px] text-center">
                <h1 className="whitespace-pre-wrap text-[26px] font-bold tracking-[0.2em] leading-[1.8] text-[#333] drop-shadow-md md:text-[30px]">
                  {slide.text}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 矢印ボタン */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition-all hover:bg-black/50"
      >
        <ChevronLeft size={28} strokeWidth={1} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition-all hover:bg-black/50"
      >
        <ChevronRight size={28} strokeWidth={1} />
      </button>
    </section>
  );
};
