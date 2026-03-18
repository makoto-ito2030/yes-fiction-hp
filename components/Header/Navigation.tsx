"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "TOPICS", href: "#" },
  { name: "VISION", href: "#" },
  { name: "BUSINESS・COMMUNITY", href: "#", extraClass: "tracking-tighter" },
  { name: "COMPANY", href: "#" },
  { name: "RECRUIT", href: "#" },
  { name: "CONTACT", href: "#" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* 【PC版】ロゴのすぐ下に表示。hidden md:flex でPCのみ出す */}
      <nav className="hidden min-[981px]:flex justify-center items-center gap-10 text-[11px] font-bold tracking-[0.15em] text-[#999]">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`hover:text-[#e6006e] transition-colors ${item.extraClass || ""}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* 【SP版：三本線ボタン】画面の右上（headerの範囲内）に固定 */}
      <div className="min-[981px]:hidden absolute right-6 top-8 md:top-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#999] flex flex-col items-center gap-1"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="text-[10px] font-bold">メニュー</span>
        </button>
      </div>

      {/* 【SP版：全画面メニュー】開いた時だけ表示 */}
      {isOpen && (
        <nav className="min-[981px]:hidden fixed inset-0 w-full h-full bg-white z-[100] pt-24 px-6">
          <ul className="flex flex-col items-center gap-8 text-[14px] font-bold tracking-[0.15em] text-[#999]">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="mt-8 pt-8 border-t border-[#eee] w-full flex justify-center gap-4 text-[11px] opacity-60">
              <Link href="#">個人情報保護方針</Link>
              <span>｜</span>
              <Link href="#">プレスキット</Link>
            </li>
          </ul>
          {/* 閉じるボタン（メニュー内） */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-6 text-[#999]"
          >
            <X size={32} />
          </button>
        </nav>
      )}
    </div>
  );
};
