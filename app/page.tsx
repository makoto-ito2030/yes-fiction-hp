import React from "react";
import Link from "next/link";
import { MainVisual } from "@/components/MainVisual";

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. メインビジュアル (カルーセル・コンポーネント) */}
      <MainVisual />

      {/* 2. ニュースリスト (Topics) */}
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
            {
              cat: "News",
              date: "2026.03.18",
              title: "コーポレートサイトをリニューアルしました",
              text: "yesフィクション株式会社の新しいアイデンティティを反映したサイトを公開しました。",
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
          <Link
            href="#"
            className="inline-block px-14 py-4 border border-[#e6006e] text-[#e6006e] text-[11px] font-bold tracking-widest hover:bg-[#e6006e] hover:text-white transition-all uppercase"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* 3. 会社概要 (Company) - 追加セクション */}
      <section className="py-[100px] bg-[#f8f9fa]">
        <div className="max-w-[1040px] mx-auto px-6">
          <div className="text-center mb-[70px]">
            <h2 className="text-[52px] font-light text-[#555] tracking-[0.15em] uppercase font-cinzel">
              Company
            </h2>
          </div>

          <div className="bg-white border border-[#eee] overflow-hidden shadow-sm">
            {[
              {
                label: "会社名",
                value: "yesフィクション株式会社（YES FICTION Co., Ltd.）",
              },
              {
                label: "所在地",
                value:
                  "〒000-0000 東京都どこか区物語町 1-2-3 フィクションビル 7F",
              },
              { label: "設立", value: "2026年3月17日" },
              { label: "代表取締役", value: "Makoto Itono" },
              {
                label: "事業内容",
                value:
                  "ナラティブ・プラットフォームの運営\nクリエイティブ・テクノロジー支援\n次世代エンジニア育成事業",
              },
              {
                label: "ミッション",
                value: "想像力という技術で、日常を鮮やかな物語へと書き換える。",
              },
            ].map((item, i) => (
              <dl
                key={i}
                className="flex flex-col md:flex-row border-b border-[#eee] last:border-0"
              >
                <dt className="w-full md:w-[280px] bg-[#fafafa] px-8 py-6 text-[13px] font-bold text-[#666] flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#e6006e] rounded-full mr-3" />
                  {item.label}
                </dt>
                <dd className="flex-grow px-8 py-6 text-[14px] text-[#333] leading-[1.8] whitespace-pre-wrap">
                  {item.value}
                </dd>
              </dl>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 事業紹介 (Services) */}
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
        <Link
          href="#"
          className="inline-block px-14 py-4 border border-[#e6006e] text-[#e6006e] text-[11px] font-bold tracking-widest hover:bg-[#e6006e] hover:text-white transition-all uppercase"
        >
          View All Business
        </Link>
      </section>

      {/* 5. ビジョン (Vision) */}
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
