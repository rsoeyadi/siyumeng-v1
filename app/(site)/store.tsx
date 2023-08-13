import { create } from "zustand";

const useHamburgerStore = create<{
  isOpen: boolean;
  toggleMenu: () => void;
  setClose: () => void;
}>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setClose: () => set((state) => ({ isOpen: false })),
}));

export default useHamburgerStore;
