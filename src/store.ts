import { create } from "zustand";
import MindMap, { PartialMindmap } from "./entities/Mindmap";

interface DashboardStore {
    currentMindmap: MindMap | PartialMindmap;
    isRenameFormModalOpen: boolean;
    showLogout: boolean;
    presentationMode: boolean;
    showColorPicker: boolean;
    setRenameFormModal: () => void;
    setShowLogout: (value: boolean) => void;
    setCurrentMindmap: (mindmap: PartialMindmap) => void;
    setPresentationMode: () => void;
    setShowColorPicker: (value: boolean) => void;
    toggleDropdown: (id: string) => void;
}

const useDashboardStore = create<DashboardStore>((set, get) => ({
    currentMindmap: {} as MindMap | PartialMindmap,
    isRenameFormModalOpen: false,
    showLogout: false,
    presentationMode: false,
    showColorPicker: false,

    setRenameFormModal: () => {
        set({ isRenameFormModalOpen: !get().isRenameFormModalOpen });
    },

    setShowLogout: (value) => set({ showLogout: value }),

    setCurrentMindmap: (mindmap) => set({ currentMindmap: { ...mindmap } }),

    setPresentationMode: () =>
        set({ presentationMode: !get().presentationMode }),

    setShowColorPicker: (value) => set({ showColorPicker: value }),

    toggleDropdown: (id) => {
        const dropdowns = document.getElementsByClassName("dropdowns");

        if (dropdowns) {
            Array.from(dropdowns).map((dropdown) => {
                if (
                    dropdown.id !== id &&
                    !dropdown.classList.contains("hidden")
                )
                    dropdown.classList.add("hidden");
            });
        }

        const dropdown = document.getElementById(id);
        if (dropdown) dropdown.classList.toggle("hidden");
    },
}));

export default useDashboardStore;
