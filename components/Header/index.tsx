import "./Header.css";
import { Logo } from "@/components/Logo";
import { PcNav } from "./Navigation";
import { SpNav } from "./Navigation";
import Link from "next/link";

export const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        background: "#fff",
        position: "relative",
        zIndex: 50,
      }}
    >
      {/* PC版 */}
      <div className="header-pc">
        <h1 className="header-pc__logo">
          <Link
            href="/"
            style={{ display: "block", width: "220px", margin: "0 auto" }}
          >
            <Logo />
          </Link>
        </h1>
        <PcNav />
      </div>

      {/* SP版 */}
      <div
        className="header-sp"
        style={{
          position: "relative",
          alignItems: "center",
          height: "60px",
          borderBottom: "1px solid #eeeeee",
        }}
      >
        {/* ロゴ: 絶対配置で中央 */}
        <h1
          style={{
            margin: 0,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Link href="/" style={{ display: "block", width: "120px" }}>
            <Logo />
          </Link>
        </h1>
        {/* メニューボタン: 右端 */}
        <div style={{ marginLeft: "auto" }}>
          <SpNav />
        </div>
      </div>
    </header>
  );
};
