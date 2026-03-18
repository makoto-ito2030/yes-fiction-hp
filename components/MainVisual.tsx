"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

// --- 設定値の切り出し（ここをいじるだけで調整完了） ---

const PC_STYLE = {
  aspect: "min-[981px]:aspect-[24/5]", // 本家比率
  text: "min-[981px]:text-[32px]",
  tracking: "min-[981px]:tracking-[0.25em]",
  paddingY: "md:py-12",
  overlayOpacity: "min-[981px]:opacity-100",
};

const SP_STYLE = {
  aspect: "aspect-[2.2/1]", // 980px以下の比率（微調整可）
  text: "text-[18px] sm:text-[24px]",
  tracking: "tracking-[0.15em]",
  paddingY: "py-7",
  overlayOpacity: "opacity-80", // スマホは画像を見やすくするため少し薄く
};

const images = ["/images/mv_01.png", "/images/mv_02.png", "/images/mv_03.png"];

// ------------------------------------------------

export const MainVisual = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Fade({ active: true }),
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative w-full border-b border-[#eee] bg-white overflow-hidden">
      {/* カルーセルコンテナ：PC/SPの比率設定を分離して適用 */}
      <div
        className={`relative w-full max-w-[1920px] mx-auto overflow-hidden transition-all duration-500 ${SP_STYLE.aspect} ${PC_STYLE.aspect}`}
        ref={emblaRef}
      >
        <div className="flex h-full relative z-0">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={src}
                alt="Main Visual"
                fill
                className="object-cover object-center"
                style={{ transitionDuration: "600ms" }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* 左右のホワイトグラデーション：PC/SPで不透明度を分ける */}
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-r from-white via-transparent to-white pointer-events-none ${SP_STYLE.overlayOpacity} ${PC_STYLE.overlayOpacity}`}
        />
      </div>

      {/* キャッチコピーエリア：フォントサイズや余白を分離して適用 */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div
          className={`w-full max-w-[900px] px-8 text-center bg-gradient-to-r from-transparent via-black/35 to-transparent ${SP_STYLE.paddingY} ${PC_STYLE.paddingY}`}
        >
          <h1
            className={`font-bold leading-[1.6] md:leading-[1.8] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] whitespace-pre-wrap ${SP_STYLE.text} ${PC_STYLE.text} ${SP_STYLE.tracking} ${PC_STYLE.tracking}`}
          >
            創造と技術を繋ぎ、{"\n"}
            まだ見ぬ未来のスタンダードを形にする。
          </h1>
          <p className="mt-2 md:mt-4 text-[12px] md:text-[14px] text-white/90 tracking-[0.3em] font-light uppercase">
            Innovating the Future Standard
          </p>
        </div>
      </div>
    </section>
  );
};
