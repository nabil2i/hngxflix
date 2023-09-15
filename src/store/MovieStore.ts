import { create } from "zustand";

interface MovieQuery {
  searchText?: string;
  language?: string;
  page?: number;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setSearchText: (searchText: string) => void;
  setLanguage: (language: string) => void;
  setPage: (page: number) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setSearchText: (searchText) =>
    set(() => ({ movieQuery: {searchText}})),
  setLanguage: (language) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, language, searchText: undefined },
    })),
  setPage: (page) =>
    set((store) => ({
      movieQuery: { ...store.movieQuery, page, searchText: undefined },
    })),
}));

export default useMovieQueryStore;