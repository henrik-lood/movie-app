import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";
import MoviePage from "./pages/MoviePage";
import ActorPage from "./pages/ActorPage";
import MovieListPage from "./pages/MovieListPage";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";

function App() {
  return (
    <>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/genres/:genreid">
            <MoviesByGenrePage />
          </Route>

          <Route path="/genres">
            <GenrePage />
          </Route>

          <Route path="/movies/:toptype">
            <MovieListPage />
          </Route>

          <Route path="/movie/:movieid">
            <MoviePage />
          </Route>

          <Route path="/actor">
            <ActorPage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
