import { create } from 'zustand';
import { api } from '../services/api';

export const useCharactersStore = create((set) => ({
  characters: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,

  fetchCharacters: async (page = 1) => {
    set({ isLoading: true, error: null });
    try {
      const data = await api.getAllCharacters(page);
      set({
        characters: data.results,
        currentPage: page,
        totalPages: data.info.pages,
        isLoading: false,
      });   
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  }
}));
