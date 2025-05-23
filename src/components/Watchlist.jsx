import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

const Watchlist = ({ movies, watchlist, toggleWatchlist }) => {
  return (
    <div>
      <h1 className="title">My Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Watchlist;
