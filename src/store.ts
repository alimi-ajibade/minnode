import { create } from "zustand";
import MindMap, { PartialMindmap } from "./entities/Mindmap";

interface DashboardStore {
    currentMindmap: MindMap | PartialMindmap;
    isRenameFormModalOpen: boolean;
    setRenameFormModal: () => void;
    setCurrentMindmap: (mindmap: PartialMindmap) => void;
    toggleDropdown: (id: string) => void;
}

const useDashboardStore = create<DashboardStore>((set, get) => ({
    currentMindmap: {} as MindMap | PartialMindmap,

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
