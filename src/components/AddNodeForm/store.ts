import { create } from "zustand";

interface FormStore {
    isVisible: boolean;
    setFormVisibility: () => void;
}

const useFormStore = create<FormStore>((set) => ({
    isVisible: false,
    setFormVisibility: () =>
        set((store) => ({ ...store, isVisible: !store.isVisible })),
}));

export default useFormStore;
