import { create } from "zustand";

const useBrochureStore = create((set) => ({
  isOpen: false,
  email: "",
  submitted: false,
  openPopup: () => set({ isOpen: true }),
  closePopup: () => set({ isOpen: false, email: "", submitted: false }),
  setEmail: (email) => set({ email }),
  setSubmitted: () => set({ submitted: true }),
}));

export default useBrochureStore;
