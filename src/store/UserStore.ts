import { create } from "zustand";
import Movie from "../entities/Movie";

interface User {
  favorites: Movie[]
}

interface UserStore {
  user: User;
  addFavoriteMovie: (movie: Movie) => void;
  removeFavoriteMovie: (movieId: number) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: {
    favorites: []
  },
  addFavoriteMovie: (movie) =>
    set((store) => ({
      user: { 
        ...store.user,
        favorites: [
          ...store.user.favorites,
          {
            ...movie,
            isLiked: true,
          }
        ]
      },
    })),
  removeFavoriteMovie: (movieId) =>
    set((store) => ({
      user: { 
        ...store.user,
        favorites: store.user.favorites.filter((movie) => movie.id !== movieId),
      },
    })),
}));

export default useUserStore;