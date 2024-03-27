import { create } from "zustand";

interface FormStore {
    isVisible: boolean;
    isUpdateForm: boolean;
    setFormVisibility: () => void;
    setIsUpdateForm: (isUpdate: boolean) => void;
}

const useFormStore = create<FormStore>((set) => ({
    isVisible: false,
    isUpdateForm: false,
    setFormVisibility: () =>
        set((store) => ({ ...store, isVisible: !store.isVisible })),
    setIsUpdateForm: (isUpdate) =>
        set((store) => ({ ...store, isUpdateForm: isUpdate })),
}));

export default useFormStore;
