import { useState } from "react";
import { IMovieAdd } from "../type";
import { Link } from "react-router-dom";
interface IForm {
  handleAddMovie: (movie: IMovieAdd) => void;
  emptyMovie: IMovieAdd;
  type?: string;
}
const Form: React.FC<IForm> = ({ handleAddMovie, emptyMovie, type }) => {
  const [movie, setMovie] = useState({
    title: emptyMovie.title,
    year: emptyMovie.year,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
    console.log(movie);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddMovie(movie);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">
        Title
        <input
          type="text"
          id="title"
          name="title"
          value={movie.title}
          placeholder="Title"
          onChange={(e) => handleChange(e)}
          required
        />
      </label>

      <label htmlFor="year">
        Year
        <input
          type="number"
          id="year"
          name="year"
          value={movie.year}
          placeholder="Year"
          onChange={(e) => handleChange(e)}
          required
        />
      </label>

      {type === "edit" ? (
        <>
          <button type="submit">Save</button>
          <Link to="/" role="button">
            cancel
          </Link>
        </>
      ) : (
        <>
          <button type="submit">add movie</button>
        </>
      )}
    </form>
  );
};
export default Form;
