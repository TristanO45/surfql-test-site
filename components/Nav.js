import React from "react";
import Image from "next/image";
import Link from "next/link"

export default function Nav() {
  return (
    <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
      <div>
        <Image src={"/surfql.png"} width="65" height="65"  />
        <span className="text-3xl ml-3">SurfQL</span>
      </div>

      <div className="flex items-center">
        <a className="btn ml-4 text-lg py-1 px-1">LinkedIn</a>
        <a className="btn ml-4 text-lg py-1 px-1">GitHub</a>
        <a className="btn ml-4 text-lg py-1 px-1">Download in VSCode</a>
      </div>
    </div>
  );
}
