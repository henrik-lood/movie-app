import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMoviesByGenre } from "../services/TMDB-API";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import Button from "react-bootstrap/Button";
import { useUrlSearchParams } from "use-url-search-params";
import styles from "../css/MovieList.module.css";

const MoviesByGenrePage = () => {
  // Plocka ut genre-id
  const { genreid } = useParams();
  // Skapa objekt med lagring av aktuella sidan (sida 1 är default, men sätts till det som du ev har i din browser (ex: https//:../?page=3 ger att searchParams.page blir 3)), lagra den som Number
  const [searchParams, setSearchParams] = useUrlSearchParams(
    { page: 1 },
    { page: Number }
  );
  // Skapa nytt objekt som innehåller serchParams-objektet och genre-id
  const variablesToSend = { searchParams: searchParams, genreid: genreid };
  // Bind page till p
  const [p, setP] = useState(searchParams.page);
  // I queryn skickas variablesToSend, och tills vi fått tillbaka svar så visas den gamla datan
  const { data, isError, isLoading } = useQuery(
    [`${genreid}`, variablesToSend],
    () => {
      return getMoviesByGenre(variablesToSend);
    },
    {
      keepPreviousData: true,
    }
  );

  // Vid rendring uppdateras searchParams.page med p
  useEffect(() => {
    setSearchParams({ page: p });
  }, [p]);

  //När knapparna Next och Previous klickas ändras searchParams.page
  const pageCount = (add) => {
    setSearchParams({ page: searchParams.page + add });
  };

  return (
    <>
      {isLoading && <p className="error">Loading, please hold.</p>}

      {isError && <p className="error">Ooops...!</p>}

      <div className={styles.container}>
        {/* Renderar ut filmerna */}
        {data?.data &&
          data.data.results.map((movie, index) => (
            <Movie key={index} props={movie} />
          ))}
      </div>
      <div className={styles.btnContainer}>
        {searchParams.page && searchParams.page > 1 && (
          <Button className={styles.button} onClick={() => pageCount(-1)}>
            &lt; Previous
          </Button>
        )}
        {data?.data &&
          searchParams.page &&
          searchParams.page < data.data.total_pages && (
            <Button className={styles.button} onClick={() => pageCount(1)}>
              Next &gt;
            </Button>
          )}
      </div>
    </>
  );
};

export default MoviesByGenrePage;
