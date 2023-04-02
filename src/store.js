import { create } from "zustand";

export const useStore = create((set, get) => ({
  quantityClick: 0,

  incrementNumber: (number) => set((state) => ({...state, quantityClick: number})),
  getState: () => get(),
}))

