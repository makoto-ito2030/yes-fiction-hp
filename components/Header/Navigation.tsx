"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { name: "TOPICS", href: "#" },
  { name: "VISION", href: "#" },
  { name: "BUSINESS・COMMUNITY", href: "#" },
  { name: "COMPANY", href: "#" },
  { name: "RECRUIT", href: "#" },
  { name: "CONTACT", href: "#" },
];

/* PC専用ナビ */
export const PcNav = () => (
  <nav
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {NAV_ITEMS.map((item) => (
      <Link key={item.name} href={item.href} className="pc-nav-link">
        {item.name}
      </Link>
    ))}
  </nav>
);

/* SP専用ナビ */
export const SpNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, mounted]);

  return (
    <>
      {/* メニューボタン（×に切り替え） */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
          color: isOpen ? "#ffffff" : "#999999",
          background: isOpen ? "#3d3d3d" : "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          transition: "background 300ms, color 300ms",
        }}
      >
        {isOpen ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="3" y1="3" x2="19" y2="19" />
            <line x1="19" y1="3" x2="3" y2="19" />
          </svg>
        ) : (
          <span
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            aria-hidden="true"
          >
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                background: "currentColor",
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                background: "currentColor",
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                background: "currentColor",
              }}
            />
          </span>
        )}
      </button>

      {mounted && (
        /* メニューパネル: ヘッダーバー(60px)の直下から表示 */
        <nav
          aria-hidden={!isOpen}
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            width: "100%",
            zIndex: 100,
            background: "#3d3d3d",
            display: "flex",
            flexDirection: "column",
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
            transition: "opacity 300ms ease",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.name} style={{ borderBottom: "1px solid #555" }}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "22px 20px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#ffffff",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#4d4d4d";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {item.name}
                  <svg
                    width="6"
                    height="11"
                    viewBox="0 0 6 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <polyline points="1,1 5,5.5 1,10" />
                  </svg>
                </Link>
              </li>
            ))}
            <li style={{ padding: "24px 20px", borderTop: "1px solid #555" }}>
              <p
                style={{
                  display: "flex",
                  gap: "16px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#aaaaaa",
                  margin: 0,
                  letterSpacing: "0.05em",
                }}
              >
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  個人情報保護方針
                </Link>
                <span>｜</span>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  プレスキット
                </Link>
              </p>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export const Navigation = SpNav;
