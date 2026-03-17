import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* メインビジュアル */}
      <section className="relative h-[400px] w-full bg-[#f8f9fa] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] via-[#ffffff] to-[#fff0f6]" />

        <button className="absolute left-6 w-11 h-11 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 z-20 transition-all">
          <ChevronLeft size={28} strokeWidth={1} />
        </button>
        <button className="absolute right-6 w-11 h-11 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 z-20 transition-all">
          <ChevronRight size={28} strokeWidth={1} />
        </button>

        <div className="z-10 hero-title-box w-full max-w-[850px] py-[55px] px-4 text-center">
          <span className="text-white text-[26px] md:text-[30px] font-bold leading-[1.8] tracking-[0.2em] drop-shadow-md">
            想像力という技術で、
            <br />
            日常を鮮やかな物語へと書き換える。
          </span>
        </div>
      </section>

      {/* ニュースリスト */}
      <section className="py-[100px] max-w-[1040px] mx-auto px-6 border-b border-[#eee]">
        <div className="text-center mb-[75px]">
          <h2 className="text-[52px] font-light text-[#555] tracking-[0.15em] uppercase font-cinzel">
            Topics
          </h2>
        </div>
        <div className="space-y-0">
          {[
            {
              cat: "Press Release",
              date: "2026.03.17",
              title: "クリエイティブ基盤『Fiction-Core』公開",
              text: "企業のブランディングを物語化する独自エンジンを発表しました。",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-10 py-[45px] border-b border-dotted border-[#ccc] last:border-0 group cursor-pointer"
            >
              <div className="shrink-0 pt-1">
                <div className="w-[64px] h-[64px] bg-[#e6006e] rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-[#333]">
                  <span className="text-white font-bold text-[10px] italic">
                    YES
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-5 mb-4">
                  <span className="px-[10px] py-[3px] bg-[#e6006e] text-white text-[9px] font-black uppercase">
                    {item.cat}
                  </span>
                  <span className="text-[#999] text-[12px] font-mono tracking-wider">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-[19px] font-bold text-[#333] mb-4 group-hover:text-[#e6006e]">
                  {item.title}
                </h3>
                <p className="text-[#888] text-[13.5px] leading-[2.0] line-clamp-2 font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[65px] text-center">
          <Link href="#" className="btn-readmore">
            Read More
          </Link>
        </div>
      </section>

      {/* 事業紹介 */}
      <section className="py-[100px] max-w-[1040px] mx-auto px-6 text-center">
        <div className="mb-[60px]">
          <h2 className="text-[52px] font-light text-[#555] tracking-[0.15em] uppercase font-cinzel">
            Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[60px]">
          {[
            {
              title: "Story Media",
              desc: "独自のナラティブ設計を導入した\n情報プラットフォーム。",
            },
            {
              title: "DX Solution",
              desc: "想像力を加速させる、\n最先端のAI開発。",
            },
            {
              title: "Community",
              desc: "物語を通じて人々が繋がる、\n新しい共創の場。",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#fcfcfc] border border-[#eee] p-10 hover:border-[#e6006e] transition-colors group"
            >
              <div className="w-12 h-12 bg-[#f8f9fa] border border-[#eee] rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-[#e6006e] group-hover:border-[#e6006e] transition-all">
                <div className="w-2 h-2 bg-[#e6006e] rounded-full group-hover:bg-white" />
              </div>
              <h4 className="text-[18px] font-bold text-[#333] mb-4">
                {s.title}
              </h4>
              <p className="text-[13px] text-[#888] font-medium leading-[1.8] whitespace-pre-wrap">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <Link href="#" className="btn-readmore">
          View All Business
        </Link>
      </section>

      {/* ビジョン */}
      <section className="py-[110px] bg-[#e6006e] text-white text-center">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-[46px] font-light tracking-[0.2em] mb-6 uppercase font-cinzel">
            Social Vision
          </h2>
          <p className="text-[22px] font-bold tracking-[0.2em] leading-[2.2] mb-[55px]">
            想像力という技術で、
            <br />
            日常を鮮やかな物語へと書き換える。
          </p>
          <Link
            href="#"
            className="inline-block px-[55px] py-[18px] border border-white text-[11px] font-bold tracking-[0.25em] hover:bg-white hover:text-[#e6006e] transition-all uppercase"
          >
            Explore More
          </Link>
        </div>
      </section>
    </div>
  );
}
