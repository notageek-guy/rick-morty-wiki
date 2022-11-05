import Image from "next/image";
import React from "react";
import rick from "../public/rick.svg";
import { FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/router";
export default function BottomNav() {
  const router = useRouter();
  const goHome = () => router.push("/");
  const goChar = () => router.push("/characters/char");
  const goSearch = () => router.push("/search");
  return (
    <div className="btm-nav ">
      <button onClick={goHome} className="text-accent">
        <AiFillHome size="24" />
      </button>
      <button onClick={goChar} className="text-accent active">
        <Image src={rick} className="mb-6" alt="logo" />
      </button>
      <button className="text-accent" onClick={goSearch}>
        <FaSearch size="24" />
      </button>
    </div>
  );
}
