import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "../css/Movie.module.css";

const Movie = (props) => {
  return (
    <Card className={`${styles.cardWidth} mt-3`} style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${props.props.poster_path}`}
      />
      <Card.Body>
        <Card.Title className={styles.title}>
          <Link className={styles.link} to={`/movie/${props.props.id}`}>
            {props.props.title}
          </Link>{" "}
          <span>{props.props.release_year}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Movie;
