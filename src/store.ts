import { create } from "zustand";
import MindMap from "./entities/Mindmap";

interface DashboardStore {
    currentMindmap: MindMap;
    setCurrentMindmap: (mindmap: MindMap) => void;
    toggleRenameForm: () => void;
    toggleDropdown: (id: string) => void;
}

const useDashboardStore = create<DashboardStore>((set) => ({
    currentMindmap: {} as MindMap,

    setCurrentMindmap: (mindmap) => set({ currentMindmap: { ...mindmap } }),

    toggleRenameForm: () => {
        const renameForm = document.getElementById("rename_form");
        if (renameForm) renameForm.classList.toggle("hidden");
    },

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
        console.log(dropdown);
        if (dropdown) dropdown.classList.toggle("hidden");
    },
}));

export default useDashboardStore;
