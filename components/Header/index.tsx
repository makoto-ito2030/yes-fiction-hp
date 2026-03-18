import { Logo } from "@/components/Logo";
import { Navigation } from "./Navigation";
import Link from "next/link";

export const Header = () => {
  return (
    // w-full で白背景を横いっぱいに。flex-col で中身を縦に並べる。
    <header className="w-full bg-white pt-10 md:pt-[50px] pb-8 md:pb-[40px] relative z-50">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center">
        {/* ロゴ：PC/SP共に中央 */}
        <h1 className="mb-6 md:mb-10">
          <Link
            href="/"
            className="transition-opacity hover:opacity-80 block w-[140px] md:w-[180px]"
          >
            <Logo />
          </Link>
        </h1>

        {/* ナビゲーション：ここに PCメニュー と SPボタン/メニュー 両方が入る */}
        <Navigation />
      </div>
    </header>
  );
};
