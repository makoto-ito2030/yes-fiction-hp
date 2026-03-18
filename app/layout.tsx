import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
// ヘッダーコンポーネントをインポート（内部でロゴとナビに分かれています）
import { Header } from "@/components/Header";
import Link from "next/link";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "yesフィクション株式会社 - YES FICTION Co.,Ltd.",
  description: "想像と技術を繋ぎ、まだ見ぬ未来のスタンダードを形にする。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={cinzel.variable}>
      <body className="bg-white">
        {/* この Header の中で:
            1. ロゴエリア（中央寄せ、余白あり）
            2. ナビゲーション（PC横並び / SPハンバーガー）
            が動いています。
        */}
        <Header />

        <main>{children}</main>

        <footer className="bg-white pt-[80px] pb-[40px] border-t border-[#eee]">
          <div className="max-w-[1280px] mx-auto px-6 text-center">
            <div className="flex justify-center gap-[30px] mb-8 text-[11px] font-bold text-[#999] tracking-widest uppercase">
              <Link href="#" className="hover:underline">
                個人情報保護方針
              </Link>
              <span className="text-[#eee]">｜</span>
              <Link href="#" className="hover:underline">
                プレスキット
              </Link>
            </div>
            <p className="text-[10px] text-[#999] tracking-[0.2em] font-sans">
              &copy; YES FICTION Co., Ltd. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
