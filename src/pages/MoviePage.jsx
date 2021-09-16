import React from "react";
import { useQuery } from "react-query";
import { getItems } from "../services/TMDB-API";
import { useParams } from "react-router-dom";
import Actor from "../components/Actor";
import styles from "../css/MoviePage.module.css";

const MoviePage = () => {
  //Plocka ut film-id för att använda i queryn
  const { movieid } = useParams();
  const apiKey = `movie/${movieid}?api_key=c7efba5c95f24621cee8bbe5a2936ad5&append_to_response=credits&language=en-US`;
  const { data, isError, isLoading } = useQuery([`${movieid}`, apiKey], () =>
    getItems(apiKey)
  );

  return (
    <>
      {isLoading && <p className="error">Loading, please hold.</p>}

      {isError && <p className="error">Ooops...!</p>}

      {data?.data && (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img
              className={styles.imgSize}
              src={`https://image.tmdb.org/t/p/w500/${data.data.poster_path}`}
            />
          </div>
          <div className={styles.title}>
            {data.data.title}{" "}
            <span className={styles.date}>{data.data.release_date}</span>
          </div>
          <p className={styles.text}>{data.data.overview}</p>
          <div className={styles.actorContainer}>
            {/* Renderar ut alla skådespelare */}
            {data.data.credits.cast.map((actor, index) => (
              <Actor key={index} props={actor} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MoviePage;
