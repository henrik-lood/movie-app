import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getItems } from "../services/TMDB-API";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { movieid } = useParams();

  const apiKey = `movie/${movieid}?api_key=c7efba5c95f24621cee8bbe5a2936ad5&language=en-US`;
  const { data, error, isError, isFetching, isLoading, isPreviousData } =
    useQuery([`${movieid}`, apiKey], () => getItems(apiKey));

  useEffect(() => {
    console.log("data is:", data);
  }, [data]);

  return (
    <>
      <div>Movie page</div>
      {data?.data && <div>{data.data.title}</div>}
    </>
  );
};

export default MoviePage;
