import { create } from "zustand";

export const useStore = create((set,get) => ({
  dateForm: {
    name: "vova",
    surname: "greba",
    tel: "2545",
    textarea: 'option',
  },
  
  updateObject: (value, name) => set((state) => ({
    dateForm: {
      ...state.dateForm,
      [name]:value,
    }
  })),
  getState: () => get(),
}));