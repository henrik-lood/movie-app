import React from "react";
import { useQuery } from "react-query";
import { getItems } from "../services/TMDB-API";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "../css/ActorPage.module.css";

const ActorPage = () => {
  //Plocka ut person-id för att använda i queryn
  const { actorid } = useParams();
  const apiKey = `person/${actorid}?api_key=c7efba5c95f24621cee8bbe5a2936ad5&append_to_response=movie_credits&language=en-US`;
  const { data, isError, isLoading } = useQuery([`${actorid}`, apiKey], () =>
    getItems(apiKey)
  );

  return (
    <>
      {/* isLoading och isError visas innan data hämtas eller om del uppstår*/}
      {isLoading && <p className="error">Loading, please hold.</p>}

      {isError && <p className="error">Ooops...!</p>}

      {/* När data hämtas renderas följande */}
      {data?.data && (
        <div className={styles.profileContainer}>
          <div>
            <img
              className={styles.profileImg}
              src={`https://image.tmdb.org/t/p/w500/${data.data.profile_path}`}
            />
          </div>
          <p className={styles.name}>{data.data.name}</p>
          <article className={styles.bio}>{data.data.biography}</article>
        </div>
      )}
      <div className={styles.movieContainer}>
        {/* Filmer skådespelaren medverkar i */}
        {data?.data &&
          data.data.movie_credits.cast.map((movie, index) => (
            <Movie key={index} props={movie} />
          ))}
      </div>
    </>
  );
};

export default ActorPage;
