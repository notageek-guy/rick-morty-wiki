import React, { Fragment } from "react";
import useApi from "../hooks/useApi";
import Card from "./card";
export default function Home() {
  const { data } = useApi();
  const res = data?.results;
  if (!res) return <h1>Loading...</h1>;
  console.log(res)
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3  lg:grid-cols-4 lg:gap-10">
        {res &&
          res.map((d) => {
            return (
              <Fragment key={d.id}>
                <Card species={d.species} name={d.name} img={d.image} status={d.status} gender={d.gender} />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}
