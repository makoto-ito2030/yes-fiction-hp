import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import { Logo } from "@/components/Logo";
import Link from "next/link";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "yesフィクション株式会社 - YES FICTION Co.,Ltd.",
  description: "想像力という技術で、日常を鮮やかな物語へと書き換える。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={cinzel.variable}>
      <body className="bg-white">
        <header className="pt-[50px] pb-[40px] bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex justify-center mb-10">
              <Link href="/" className="transition-opacity hover:opacity-80">
                <Logo />
              </Link>
            </div>

            <nav className="flex justify-center items-center gap-[50px] text-[11px] font-bold tracking-[0.15em] text-[#999]">
              <Link href="#" className="hover:text-[#e6006e] transition-colors">
                TOPICS
              </Link>
              <Link href="#" className="hover:text-[#e6006e] transition-colors">
                VISION
              </Link>
              <Link
                href="#"
                className="hover:text-[#e6006e] transition-colors tracking-tighter"
              >
                BUSINESS・COMMUNITY
              </Link>
              <Link href="#" className="hover:text-[#e6006e] transition-colors">
                COMPANY
              </Link>
              <Link href="#" className="hover:text-[#e6006e] transition-colors">
                RECRUIT
              </Link>
              <Link href="#" className="hover:text-[#e6006e] transition-colors">
                CONTACT
              </Link>
            </nav>
          </div>
        </header>

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
