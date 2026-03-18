"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

/**
 * --- デザイン・サイズ調整用設定 ---
 * 閲覧デバイスの画面幅（境界線：980px）に応じて、スタイルを最適化しています。
 */

const PC_STYLE = {
  // ワイド画面での比率（横24:縦5）。画面幅に合わせて高さが流動的に変化します [cite: 5, 13]
  aspect: "min-[981px]:aspect-[24/5]",
  // PC時のメインテキストサイズ [cite: 5, 18]
  text: "min-[981px]:text-[32px]",
  // 文字の間隔（ゆったりとした高級感を演出） [cite: 5, 18]
  tracking: "min-[981px]:tracking-[0.25em]",
  // 中央のテキストエリアの上下余白（背景の黒帯の厚みに影響） [cite: 5, 17]
  paddingY: "md:py-12",
  // 左右両端にあるホワイトグラデーションの不透明度 [cite: 5, 16]
  overlayOpacity: "min-[981px]:opacity-100",
};

const SP_STYLE = {
  // 980px以下のモバイル・タブレット環境での比率 [cite: 6, 13]
  // 分母（2.4）を大きくするとより細く、小さくするとより厚い（縦長の）印象になります
  aspect: "aspect-[2.4/1]",
  // モバイル時のテキストサイズ（画面幅に応じて2段階で調整） [cite: 6, 18]
  text: "text-[18px] sm:text-[24px]",
  // モバイル時の文字間隔 [cite: 6, 18]
  tracking: "tracking-[0.15em]",
  // モバイル時のテキストエリアの上下余白 [cite: 6, 17]
  paddingY: "py-7",
  // モバイル時は画像の中央を際立たせるため、左右の白ぼかしを少し透過(80%)させています [cite: 6, 16]
  overlayOpacity: "opacity-80",
};

// スライドに使用する画像パスの配列 [cite: 7, 13]
const images = ["/images/mv_01.png", "/images/mv_02.png", "/images/mv_03.png"];

// ------------------------------------------------

export const MainVisual = () => {
  // カルーセルの動作設定 [cite: 10]
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Fade({ active: true }), // スムーズなフェード切り替えを有効化 [cite: 10]
    Autoplay({ delay: 3000, stopOnInteraction: false }), // 3秒間隔で自動再生 [cite: 10]
  ]);

  return (
    <section className="relative w-full border-b border-[#eee] bg-white overflow-hidden [cite: 13]">
      {/* ビジュアルコンテナ:
        max-w-[1920px] で巨大画面での過度な拡大を防止。
        duration-500 によりレスポンシブなサイズ変化を滑らかに表現します [cite: 13]。
      */}
      <div
        className={`relative w-full max-w-[1920px] mx-auto overflow-hidden transition-all duration-500 ${SP_STYLE.aspect} ${PC_STYLE.aspect} [cite: 13]`}
        ref={emblaRef}
      >
        <div className="flex h-full relative z-0 [cite: 13]">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-full min-w-0 flex-[0_0_100%] [cite: 14]"
            >
              <Image
                src={src}
                alt="Main Visual"
                fill
                // object-cover: 縦幅を優先的に表示し、左右を自然に画面外へ逃がす設定 [cite: 14]
                className="object-cover object-center [cite: 14]"
                // transitionDuration: 画像が切り替わる際のフェード速度(600ms) [cite: 15]
                style={{ transitionDuration: "600ms" }}
                priority={index === 0} // 初回読み込み速度を最適化 [cite: 15]
              />
            </div>
          ))}
        </div>

        {/* 左右のホワイトグラデーション:
          画像を左右の余白から背景（白）へと自然に溶け込ませるためのレイヤーです [cite: 16]。
        */}
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-r from-white via-transparent to-white pointer-events-none ${SP_STYLE.overlayOpacity} ${PC_STYLE.overlayOpacity} [cite: 16]`}
        />
      </div>

      {/* テキストオーバーレイエリア:
        画像中央に配置。pointer-events-none により背後のカルーセル操作を妨げません [cite: 17]。
      */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none [cite: 17]">
        {/* 背景のグラデーション帯:
          via-black/35 により文字の背景に薄い影を落とし、視認性を確保します [cite: 17]。
        */}
        <div
          className={`w-full max-w-[900px] px-8 text-center bg-gradient-to-r from-transparent via-black/35 to-transparent ${SP_STYLE.paddingY} ${PC_STYLE.paddingY} [cite: 17]`}
        >
          <h1
            className={`font-bold leading-[1.6] md:leading-[1.8] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] whitespace-pre-wrap ${SP_STYLE.text} ${PC_STYLE.text} ${SP_STYLE.tracking} ${PC_STYLE.tracking} [cite: 17, 18]`}
          >
            創造と技術を繋ぎ、{"\n"}
            まだ見ぬ未来のスタンダードを形にする。
          </h1>
          <p className="mt-2 md:mt-4 text-[12px] md:text-[14px] text-white/90 tracking-[0.3em] font-light uppercase [cite: 18]">
            Innovating the Future Standard
          </p>
        </div>
      </div>
    </section>
  );
};
