import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getItems } from "../services/TMDB-API";

const GenrePage = () => {
  const apiKey =
    "genre/movie/list?api_key=c7efba5c95f24621cee8bbe5a2936ad5&language=en-US";
  const { data, error, isError, isFetching, isLoading, isPreviousData } =
    useQuery(["genres", apiKey], () => getItems(apiKey));

  useEffect(() => {}, [data]);

  return (
    <>
      <div>Genres:</div>
      {data?.data &&
        data.data.genres.map((genre, index) => {
          return (
            <div key={index}>
              <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
            </div>
          );
        })}
    </>
  );
};

export default GenrePage;
