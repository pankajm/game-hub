import { create } from "zustand";
interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
  page?: number;
  page_size?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  updateGenre: (genreId: number) => void;
  updatePlatform: (platformId: number) => void;
  updateSortOrder: (sortOrder: string) => void;
  updateSearch: (searchText: string) => void;
  updatePage: (page: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  updateGenre: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  updatePlatform: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  updateSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  updateSearch: (searchText) => set(() => ({ gameQuery: { searchText } })),
  updatePage: (page) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, page } })),
}));

export default useGameQueryStore;
