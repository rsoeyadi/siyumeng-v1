import { create } from "zustand";

const useHamburgerStore = create<{
  isOpen: boolean;
  setOpen: () => void;
}>((set) => ({
  isOpen: false,
  setOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useHamburgerStore;
