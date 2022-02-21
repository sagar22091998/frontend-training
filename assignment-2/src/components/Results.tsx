import { FunctionComponent, Dispatch, SetStateAction } from "react";

import "../styles/Results.css";
import { MovieBasicInfo } from "../helpers/APIResponsesTypes";
import MovieCard from "./MovieCard";

interface Props {
  error: boolean;
  movieList: MovieBasicInfo[];
  errorText: string;
  updateShowModal: Dispatch<SetStateAction<boolean>>;
  updateSelectedMovie: Dispatch<SetStateAction<string>>;
}

const Results: FunctionComponent<Props> = ({
  error,
  movieList,
  updateShowModal,
  updateSelectedMovie,
  errorText,
}) => {
  return (
    <div className="paginator">
      {error ? (
        <div className="error">{errorText}</div>
      ) : (
        <div className="results">
          {movieList.map((movie) => (
            <MovieCard
              updateShowModal={updateShowModal}
              updateSelectedMovie={updateSelectedMovie}
              movieInfo={movie}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
