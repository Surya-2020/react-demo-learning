import { MoviesList } from "./MoviesList";
let items = [
  { vijaymovies: "LEO", rating: 4, id: 1 },
  { vijaymovies: "MASTER", rating: 4.1, id: 2 },
  { vijaymovies: "GOAT", rating: 3, id: 3 },
];

//items = [];
export const MoviesListHandler = () => {
  const setMovieName = (movieName) => {
    return console.log(movieName);
  };
  return (
    <>
      <MoviesList items={items} message={setMovieName} />
    </>
  );
};
