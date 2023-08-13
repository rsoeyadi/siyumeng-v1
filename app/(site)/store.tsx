import { create } from "zustand";

const useHamburgerStore = create((set) => ({
  isOpen: false,
  setOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useHamburgerStore;
