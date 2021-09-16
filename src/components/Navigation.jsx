import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="nav-link text-white">
            Home
          </NavLink>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink to="/genres" className="nav-link text-white">
            Genres
          </NavLink>

          <NavLink to="/movies/popular" className="nav-link text-white">
            Popular
          </NavLink>

          <NavLink to="/movies/now_playing" className="nav-link text-white">
            Latest
          </NavLink>

          <NavLink to="/movies/top_rated" className="nav-link text-white">
            Rated
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
