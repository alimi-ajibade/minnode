import { create } from "zustand";
import MindMap, { PartialMindmap } from "./entities/Mindmap";

interface DashboardStore {
    currentMindmap: MindMap | PartialMindmap;
    isRenameFormModalOpen: boolean;
    showLogout: boolean;
    setRenameFormModal: () => void;
    setShowLogout: (value: boolean) => void;
    setCurrentMindmap: (mindmap: PartialMindmap) => void;
    toggleDropdown: (id: string) => void;
}

const useDashboardStore = create<DashboardStore>((set, get) => ({
    currentMindmap: {} as MindMap | PartialMindmap,

    isRenameFormModalOpen: false,

    showLogout: false,

    setRenameFormModal: () => {
        set({ isRenameFormModalOpen: !get().isRenameFormModalOpen });
    },

    setShowLogout: () => set({ showLogout: !get().showLogout }),

    setCurrentMindmap: (mindmap) => set({ currentMindmap: { ...mindmap } }),

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
