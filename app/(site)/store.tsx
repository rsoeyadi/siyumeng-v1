import { create } from "zustand";

const useHamburgerStore = create<{
  isOpen: boolean;
  toggleMenu: () => void;
}>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useHamburgerStore;
