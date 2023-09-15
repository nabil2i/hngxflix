import Genre from "./Genre";

export default interface Movie {
  id: number;
  poster_path: string; //"/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  release_date: string; // "2023-07-19"
  genre_ids: number[];
  title: string;
  overview: string;
  runtime: number;
  genres: Genre[];
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
  imdb_id: string;
}
