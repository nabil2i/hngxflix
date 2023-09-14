import { create } from "zustand";

interface MovieQuery {
  searchText?: string;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setSearchText: (searchText: string) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setSearchText: (searchText) =>
    set(() => ({ movieQuery: {searchText}})),
}));

export default useMovieQueryStore;