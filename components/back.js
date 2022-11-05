import React from "react";
import { useRouter } from "next/router";
import {BsArrowLeft} from 'react-icons/bs'
export default function () {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <button className="btn my-2 btn-success ml-2" onClick={goBack}>
      <BsArrowLeft />
    </button>
  );
}
