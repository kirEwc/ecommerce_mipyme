import Image from "next/image";
import React from "react";

export const PublicityRight = () => {
  return (
    <>
      <div className="relative w-1/2 h-64 mx-auto mt-2 hidden lg:block ">
  <Image
    src="/images/publicity/868.webp"
    alt="publicityLeft"
    fill
    priority
    sizes="(50vw, 50vh)"
    className="object-cover object-center rounded-xl"
  />
</div>

    </>
  );
};
