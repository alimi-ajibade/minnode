import { create } from "zustand";
import MindMap from "./entities/Mindmap";

interface DashboardStore {
    currentMindmap: MindMap;
    isRenameFormModalOpen: boolean;
    setRenameFormModal: () => void;
    setCurrentMindmap: (mindmap: MindMap) => void;
    toggleDropdown: (id: string) => void;
}

const useDashboardStore = create<DashboardStore>((set, get) => ({
    currentMindmap: {} as MindMap,

    isRenameFormModalOpen: false,

    setRenameFormModal: () => {
        set({ isRenameFormModalOpen: !get().isRenameFormModalOpen });
    },

    setCurrentMindmap: (mindmap) => set({ currentMindmap: { ...mindmap } }),

    toggleDropdown: (id) => {
        const dropdowns = document.getElementsByClassName("dropdowns");

        if (dropdowns) {
            Array.from(dropdowns).forEach((dropdown) => {
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
