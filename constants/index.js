export const API_URL = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
};

export const fetcher = (url) => fetch(url).then((res) => res.json());

