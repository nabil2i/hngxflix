import Movie from "../entities/Movie";
import APIClient from "./api-client";

export default new APIClient<Movie>('/movie/top_rated');
// export default new APIClient<Movie>('/discover/movie');
