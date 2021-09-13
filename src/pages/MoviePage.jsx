import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getItems } from "../services/TMDB-API";
import { useParams } from "react-router-dom";
import Actor from "../components/Actor";

const MoviePage = () => {
  const { movieid } = useParams();

  const apiKey = `movie/${movieid}?api_key=c7efba5c95f24621cee8bbe5a2936ad5&append_to_response=credits&language=en-US`;
  const { data, error, isError, isFetching, isLoading, isPreviousData } =
    useQuery([`${movieid}`, apiKey], () => getItems(apiKey));

  useEffect(() => {}, [data]);

  return (
    <>
      {data?.data && (
        <div>
          <div>
            {data.data.title} <span>{data.data.release_date}</span>
          </div>
          <p>{data.data.overview}</p>
          {data.data.credits.cast.map((actor, index) => (
            <Actor key={index} props={actor} />
          ))}
        </div>
      )}
    </>
  );
};

export default MoviePage;
