import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getItems } from "../services/TMDB-API";
import { useParams } from "react-router-dom";

const MoviesByGenrePage = () => {
  const { genreid } = useParams();
  console.log("id is:", genreid);

  const apiKey = `discover/movie?api_key=c7efba5c95f24621cee8bbe5a2936ad5&with_genres=${genreid}`;
  const { data, error, isError, isFetching, isLoading, isPreviousData } =
    useQuery([`${genreid}`, apiKey], () => getItems(apiKey));

  useEffect(() => {
    console.log("data is:", data);
  }, [data]);

  return (
    <>
      <div>Movies by genre:</div>
      {data?.data &&
        data.data.results.map((movie, index) => {
          return (
            <>
              <div key={index}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              </div>
            </>
          );
        })}
    </>
  );
};

export default MoviesByGenrePage;
