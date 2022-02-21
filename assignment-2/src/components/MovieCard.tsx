import { Component, ReactNode, Dispatch, SetStateAction } from "react";

import { MovieBasicInfo } from "../helpers/APIResponsesTypes";
import notFoundImage from "../assests/no-image.png";
import "../styles/MovieCard.css";

interface Props {
  movieInfo: MovieBasicInfo;
  updateSelectedMovie: Dispatch<SetStateAction<string>>;
  updateShowModal: Dispatch<SetStateAction<boolean>>;
}

class MovieCard extends Component<Props> {
  render(): ReactNode {
    const { movieInfo, updateSelectedMovie, updateShowModal } = this.props;
    const { Title, imdbID, Poster } = movieInfo;

    return (
      <div
        onClick={() => {
          updateSelectedMovie(imdbID);
          updateShowModal(true);
        }}
        className="movie-card"
      >
        <div className="movie-card--title">{Title}</div>
        <div className="movie-card--img">
          <img src={Poster !== "N/A" ? Poster : notFoundImage} alt={Title} />
        </div>
      </div>
    );
  }
}

export default MovieCard;
