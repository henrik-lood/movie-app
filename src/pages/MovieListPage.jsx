import React from "react";
import { useQuery } from "react-query";
import { getItems } from "../services/TMDB-API";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "../css/MovieList.module.css";

const MovieListPage = () => {
  // Hämta ut listkategorin som ska skickas i queryn
  const { toptype } = useParams();
  const apiKey = `movie/${toptype}?api_key=c7efba5c95f24621cee8bbe5a2936ad5&language=en-US`;
  const { data, isError, isLoading } = useQuery([`${toptype}`, apiKey], () =>
    getItems(apiKey)
  );

  return (
    <div className={styles.container}>
      {isLoading && <p className="error">Loading, please hold.</p>}

      {isError && <p className="error">Ooops...!</p>}

      {/* Renderar ut filmerna */}
      {data?.data &&
        data.data.results.map((movie, index) => (
          <Movie key={index} props={movie} />
        ))}
    </div>
  );
};

export default MovieListPage;
