import React, { Fragment } from "react";
import BottomNav from "../../components/bottomnav";
import Card from "../../components/card";
import Filter from "../../components/filter";
import Navbar from "../../components/nav";
import Pagination from "../../components/paginated";
import Link from "next/link";
import useApi from "../../hooks/useApi";
import Back from "../../components/back";
export default function CharacterList() {
  const { data, setPageIndex, pageIndex, query, setQuery, status, setStatus } =
    useApi();
  const res = data?.results;

  if (!res) return <h1>Loading...</h1>;
  return (
    <>
      <Navbar />
      <Filter status={status} setStatus={setStatus} />
      <div className="container mx-auto  ">
        <Back />
        <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3  lg:grid-cols-4 lg:gap-10 ">
          {res?.map((d) => {
            return (
              <Fragment key={d.id}>
                <Link passHref href={`/characters/${encodeURIComponent(d.id)}`}>
                  <Card name={d.name} img={d.image} status={d.status} />
                </Link>
              </Fragment>
            );
          })}
        </div>
      </div>
      <Pagination
        info={data}
        pageCount={pageIndex}
        setPageCount={setPageIndex}
      />
    </>
  );
}
