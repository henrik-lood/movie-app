import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getItems } from "../services/TMDB-API";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

const ActorPage = () => {
  const { actorid } = useParams();

  const apiKey = `person/${actorid}?api_key=c7efba5c95f24621cee8bbe5a2936ad5&append_to_response=movie_credits&language=en-US`;
  const { data, error, isError, isFetching, isLoading, isPreviousData } =
    useQuery([`${actorid}`, apiKey], () => getItems(apiKey));

  useEffect(() => {
    console.log("data is:", data);
  }, [data]);

  return (
    <>
      <div>Actor Page</div>
      {data?.data && <p>{data.data.name}</p>}
      {data?.data &&
        data.data.movie_credits.cast.map((movie, index) => (
          <>
            <Movie key={index} props={movie} />
          </>
        ))}
    </>
  );
};

export default ActorPage;
