import React from "react";

export const Logo = () => {
  return (
    <div
      style={{ width: "380px", height: "110px" }}
      className="flex items-center justify-center bg-white mx-auto"
    >
      <div className="flex items-center gap-4">
        {/* シンボルアイコン：ブランドカラーのピンクを採用 */}
        <div className="w-[62px] h-[62px] bg-[#e6006e] rounded-full flex items-center justify-center shadow-sm">
          <span
            className="text-white text-[28px] font-black italic tracking-tighter"
            style={{ fontFamily: "Arial" }}
          >
            Y
          </span>
        </div>

        <div className="flex flex-col items-start">
          <span
            className="text-[36px] font-black tracking-[0.15em] text-[#333] leading-none uppercase"
            style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          >
            YES FICTION
          </span>
          {/* ブランドスローガン */}
          <span className="text-[10px] font-bold tracking-[0.45em] text-[#e6006e] mt-1 ml-1 uppercase">
            Storytelling for humanity
          </span>
        </div>
      </div>
    </div>
  );
};
