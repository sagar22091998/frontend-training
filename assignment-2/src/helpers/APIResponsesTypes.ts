export interface MovieBasicInfo {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export type MovieSearchAPIResponsePositive = {
  Response: "True";
  Search: MovieBasicInfo[];
  totalResults: number;
};

export type MovieSearchAPIResponseNegative = {
  Response: "False";
  Error: string;
};

export type MovieSearchAPIResponse =
  | MovieSearchAPIResponsePositive
  | MovieSearchAPIResponseNegative;

export type APIStatus = "Initial" | "Loading" | "Loaded";

export interface MovieDetailedInfo {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Rating: object[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
