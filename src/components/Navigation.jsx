import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="ms-auto">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/genres" className="nav-link">
            Genres
          </NavLink>

          <NavLink to="/movies/popular" className="nav-link">
            Popular
          </NavLink>

          <NavLink to="/movies/now_playing" className="nav-link">
            Latest
          </NavLink>

          <NavLink to="/movies/top_rated" className="nav-link">
            Rated
          </NavLink>

          {/* <NavLink to="/movie" className="nav-link">
            Movie Page
          </NavLink>

          <NavLink to="/actor" className="nav-link">
            Actor Page
          </NavLink> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
