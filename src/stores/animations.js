import { create } from "zustand";

export const useFrontEndStore = create((set) => ({
  filtersVisible: true,
  setFiltersVisible: (g) => set(() => ({ filtersVisible: g })),
}));
