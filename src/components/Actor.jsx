import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "../css/Actor.module.css";

const Actor = (props) => {
  return (
    <>
      <Card
        className={`${styles.card} mx-auto mt-3`}
        style={{ width: "14rem" }}
      >
        <Card.Img
          className="img-responsive"
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${props.props.profile_path}`}
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/actor/${props.props.id}`}>{props.props.name}</Link>
          </Card.Title>
          <Card.Text>{props.props.character}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Actor;
