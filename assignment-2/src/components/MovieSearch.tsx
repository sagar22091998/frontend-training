import { FunctionComponent, useState, MouseEvent } from "react";
import { TailSpin } from "react-loader-spinner";

import {
  MovieSearchAPIResponse,
  MovieBasicInfo,
  APIStatus,
} from "../helpers/APIResponsesTypes";
import MovieDetails from "./MovieDetails";
import Modal from "./Modal";
import Paginator from "./Paginator";
import Results from "./Results";
import "../styles/MovieSearch.css";
import { useAsyncError } from "../helpers/useAsyncError";

const MovieSearch: FunctionComponent = () => {
  const [title, updateTitle] = useState("");
  const [realeaseYear, updateRealeaseYear] = useState("");
  const [pageNumber, updatePageNumber] = useState(1);
  const [movieList, updateMovieList] = useState([] as MovieBasicInfo[]);
  const [totalPages, updateTotalPages] = useState(0);
  const [selectedMovieID, updateSelectedMovieID] = useState("");
  const [showModal, updateShowModal] = useState(false);
  const [status, updateStatus] = useState("Initial" as APIStatus);
  const [error, updateError] = useState(false);
  const [errorText, updateErrorText] = useState("");
  const throwError = useAsyncError();

  async function movieSearch(pageNumber = 1) {
    updateError(false);
    updateStatus("Loading");

    try {
      const MovieAPIURL = `http://www.omdbapi.com/?apikey=df5763f1&s=${title}&y=${realeaseYear}&page=${pageNumber}`;
      const res = await fetch(MovieAPIURL);
      const json: MovieSearchAPIResponse = await res.json();

      if (json.Response === "True") {
        updateMovieList(json.Search);
        updateTotalPages(Math.ceil(json.totalResults / 10));
      } else {
        updateError(true);
        updateErrorText(json.Error);
        updateTotalPages(0);
      }
      updateStatus("Loaded");
    } catch (error) {
      throwError(new Error("Asynchronous error"));
    }
  }

  const handlePagination = (event: MouseEvent<HTMLDivElement>): void => {
    if (!(event.target instanceof HTMLDivElement)) {
      return;
    }

    if (event.target.dataset.index) {
      updatePageNumber(+event.target.dataset.index);
      movieSearch(+event.target.dataset.index);
    }
  };

  return (
    <div className="search-params">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          movieSearch();
          updatePageNumber(1);
        }}
      >
        <div className="search-form--container">
          <label className="search-form--input" htmlFor="title">
            Movie Title
            <input
              id="title"
              value={title}
              placeholder="Title"
              onChange={(e) => updateTitle(e.target.value)}
            />
          </label>
          <label className="search-form--input" htmlFor="year">
            Movie Release Year
            <input
              id="realeaseYear"
              type="number"
              min="0"
              value={realeaseYear}
              placeholder="Realease Year"
              onChange={(e) => updateRealeaseYear(e.target.value)}
            />
          </label>
        </div>
        <button className="search-form--btn">Submit</button>
      </form>

      {status === "Loaded" ? (
        <>
          <Paginator
            pageNumber={pageNumber}
            handlePagination={handlePagination}
            totalPages={totalPages}
          />
          <Results
            updateSelectedMovie={updateSelectedMovieID}
            updateShowModal={updateShowModal}
            error={error}
            errorText={errorText}
            movieList={movieList}
          />
        </>
      ) : status === "Loading" ? (
        <div className="search-form--loading">
          <TailSpin color="deepskyblue" />
        </div>
      ) : null}

      {showModal ? (
        <Modal>
          <MovieDetails
            movieID={selectedMovieID}
            updateShowModal={updateShowModal}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default MovieSearch;
