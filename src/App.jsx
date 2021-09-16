import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";
import MoviePage from "./pages/MoviePage";
import ActorPage from "./pages/ActorPage";
import MovieListPage from "./pages/MovieListPage";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";
import styles from "./css/Home.module.css";

function App() {
  return (
    <div className={styles.background}>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          {/* Används för att generera listor efter genrer */}
          <Route path={`/genres/:genreid`}>
            <MoviesByGenrePage />
          </Route>

          <Route path="/genres">
            <GenrePage />
          </Route>

          {/* Används för att generera toplistor */}
          <Route path="/movies/:toptype">
            <MovieListPage />
          </Route>

          <Route path="/movie/:movieid">
            <MoviePage />
          </Route>

          <Route path="/actor/:actorid">
            <ActorPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
