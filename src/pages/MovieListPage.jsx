import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getItems } from "../services/TMDB-API";
import { useParams } from "react-router-dom";

const MovieListPage = () => {
  const { toptype } = useParams();

  const apiKey = `movie/${toptype}?api_key=c7efba5c95f24621cee8bbe5a2936ad5&language=en-US`;
  const { data, error, isError, isFetching, isLoading, isPreviousData } =
    useQuery([`${toptype}`, apiKey], () => getItems(apiKey));

  useEffect(() => {
    console.log("data is:", data);
    console.log(typeof data);
  }, [data]);

  return (
    <>
      <div>Movie list page:</div>
      {data?.data &&
        data.data.results.map((movie, index) => {
          return <div key={index}>{movie.title}</div>;
        })}
    </>
  );
};

export default MovieListPage;
