import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Movie = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${props.props.poster_path}`}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/movie/${props.props.id}`}>{props.props.title}</Link>{" "}
          <span>{props.props.release_year}</span>
        </Card.Title>
        <Card.Text>{props.props.overview}</Card.Text>
        <Card.Text>Rating: {props.props.vote_average}/10</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
