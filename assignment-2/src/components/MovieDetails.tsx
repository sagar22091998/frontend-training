import { Component, ReactNode, Dispatch, SetStateAction } from "react";
import { TailSpin } from "react-loader-spinner";

import "../styles/MovieDetails.css";
import { MovieDetailedInfo } from "../helpers/APIResponsesTypes";

interface Props {
  movieID: string;
  updateShowModal: Dispatch<SetStateAction<boolean>>;
}

class MovieDetails extends Component<Props> {
  state = {
    loaded: false,
    movieDetailed: {} as MovieDetailedInfo,
  };

  async componentDidMount() {
    const { movieID } = this.props;

    const MovieDetailsAPIURL = `http://www.omdbapi.com/?apikey=df5763f1&i=${movieID}`;
    const res = await fetch(MovieDetailsAPIURL);
    const json = (await res.json()) as MovieDetailedInfo;

    this.setState({
      movieDetailed: json,
      loaded: true,
    });
  }

  calulateHitFlop = (): boolean => {
    const { imdbRating } = this.state.movieDetailed;

    return +imdbRating >= 7;
  };

  render(): ReactNode {
    const { updateShowModal } = this.props;
    const { movieDetailed, loaded } = this.state;
    const {
      Title,
      Released,
      Director,
      imdbRating,
      Genre,
      Language,
      Country,
      imdbVotes,
    } = movieDetailed;
    return (
      <div className="details">
        <div onClick={() => updateShowModal(false)} className="details--close">
          X
        </div>
        {loaded ? (
          <div className="details--container">
            <div className="details--info">Title : {Title}</div>
            <div className="details--info">Released : {Released}</div>
            <div className="details--info">Director : {Director}</div>
            <div className="details--info">IMDB Rating: {imdbRating}/10</div>
            <div className="details--info">Genre : {Genre}</div>
            <div className="details--info">Language : {Language}</div>
            <div className="details--info">Votes : {imdbVotes}</div>
            <div className="details--info">Country : {Country}</div>
            {this.calulateHitFlop() ? (
              <div className="details--hit">HIT</div>
            ) : (
              <div className="details--flop">FLOP</div>
            )}
          </div>
        ) : (
          <div className="details--loading">
            <TailSpin color="deepskyblue" />
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetails;
