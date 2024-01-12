import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres } = useGenre();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
