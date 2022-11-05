import { API_URL } from "../../constants";
import Back from "../../components/back";
import Image from "next/image";
export default function Character({ data }) {
  const { image, status, origin, location, gender, name, species } = data;
  return (
    <div className="container mx-auto mt-8 ">
      <Back />
      <div className=" flex  flex-col min-h-screen items-center justify-center">
        <div className="card bg-base-100 shadow-xl p-0 sm:p-2 md:p-5">
          <Image
            src={image}
            width="150"
            height="100"
            alt={name}
            priority
            className="rounded-full mx-auto w-32 h-auto sm:w-40 sm:h-auto"
          />
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex justify-between">
              <span className="badge badge-success">{gender}</span>
              <span
                className={`badge  ${
                  status === "Alive"
                    ? "badge-success"
                    : status === "Dead"
                    ? "badge-error"
                    : "badge-secondary"
                }`}
              >
                {status}
              </span>
              <span
                className={`${
                  species === "Human"
                    ? "badge badge-accent"
                    : "badge badge-error"
                }`}
              >
                {species}
              </span>
            </div>
            <p>
              <span className="font-bold">Location :</span>{" "}
              <span>{location.name}</span>
            </p>
            <p className="">
              <span className="font-bold pr-2">Origin :</span>
              <span>{origin.name}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const resp = await fetch(`${API_URL.characters}`);
  const posts = await resp.json();
  const paths = posts.results.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const queryId = params.id;
  const resp = await fetch(`${API_URL.characters}/${queryId}`);
  const data = await resp.json();
  return {
    props: {
      data,
    },
  };
}
