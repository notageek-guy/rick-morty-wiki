import React from "react";
import Status from "./status";
import Image from "next/image";
export default function Card({ species, name, gender, img, status }) {
  return (
    <div className="card bg-base-300 p-2 shadow-xl">
      <div className="fill-current">
        <Image
          className="rounded pb-1 hover:scale-105  w-52 h-52 "
          alt={name}
          src={img}
          width="240"
          height="200"
          priority
        />
          <h1 className="py-2 text-center">{name}</h1>
        <div className="flex justify-between">
        <Status status={status} />
          <h1 className={`${species==='Human' ? 'badge badge-accent' : 'badge badge-error'}`}>{species}</h1>
        </div>
      </div>
    </div>
  );
}
