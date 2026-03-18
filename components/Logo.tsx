import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center bg-white mx-auto">
      {/* width/height は本家の Rendered size (140x24) を指定。
          alt 属性はアクセシビリティ（SEO）のために必須です。
      */}
      <Image
        src="/images/logo01.png"
        alt="YES FICTION"
        width={220}
        height={38}
        priority
        className="object-contain"
      />
    </div>
  );
};
