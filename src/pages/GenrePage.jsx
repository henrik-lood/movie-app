import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getItems } from "../services/TMDB-API";
import styles from "../css/GenreCard.module.css";

const GenrePage = () => {
  // Hämtar alla genrer
  const apiKey =
    "genre/movie/list?api_key=c7efba5c95f24621cee8bbe5a2936ad5&language=en-US";
  const { data, isError, isLoading } = useQuery(["genres", apiKey], () =>
    getItems(apiKey)
  );

  return (
    <div className={styles.cardContainer}>
      {isLoading && <p className="error">Loading, please hold.</p>}

      {isError && <p className="error">Ooops...!</p>}

      {/* Renderar ut alla genrer */}
      {data?.data &&
        data.data.genres.map((genre, index) => {
          return (
            <Link
              className={styles.genreCard}
              key={index}
              to={`/genres/${genre.id}?page=1`}
            >
              {genre.name}
            </Link>
          );
        })}
    </div>
  );
};

export default GenrePage;
