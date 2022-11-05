import React, { Fragment } from "react";
import BottomNav from "../components/bottomnav";
import Card from "../components/card";
import Navbar from "../components/nav";

import useApi from "../hooks/useApi";
export default function search() {
  const { data, query, setQuery, pageIndex, setPageIndex } = useApi();
  const res = data?.results;
  return (
    <Fragment>
      <Navbar />
      <div className="mt-6 container mx-auto ">
        <SearchInput query={query} handleInput={setQuery} />
        
        <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3  lg:grid-cols-4 lg:gap-10 py-4">
          {res?.map((d) => {
            return (
              <Fragment key={d.id}>
                <Card name={d.name} img={d.image} status={d.status} />
              </Fragment>
            );
          })}
        </div>
        <BottomNav />
      </div>
    </Fragment>
  );
}

const SearchInput = ({ query, handleInput }) => {
  return (
    <div className="flex justify-center">
      <input
        value={query}
        type="text"
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Look for your character"
        className="input  input-bordered input-accent w-[80%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg "
      />
    </div>
  );
};
