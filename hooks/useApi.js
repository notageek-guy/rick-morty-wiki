import { API_URL, fetcher } from "../constants";
import { useState } from "react";
import useSWR from "swr";
export default function useApi() {
  const [pageIndex, setPageIndex] = useState(1);
  const [status, setStatus] = useState("");
  const [query, setQuery] = useState(" ");
  const { data } = useSWR(
    `${API_URL.characters}/?page=${pageIndex}&name=${query}&status=${status}`,
    fetcher
  );
  return {
    data,
    setPageIndex,
    pageIndex,
    query,
    setQuery,
    status,
    setStatus,
  };
}
