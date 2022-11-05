import React from "react";
import BottomNav from "../components/bottomnav";
import Home from "../components/home";
import Navbar from "../components/nav";
import Pagination from "../components/paginated";
import useApi from "../hooks/useApi";
export default function index() {
  const { data, setPageIndex, pageIndex } = useApi();

  return (
    <div>
      <Navbar />
      
      <Home />
      <BottomNav />
    </div>
  );
}
