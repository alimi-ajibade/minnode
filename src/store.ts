import { create } from "zustand";
import MindMap from "./entities/Mindmap";

interface MindmapStore {
    currentMindmap: MindMap;
    setCurrentMindmap: (mindmap: MindMap) => void;
}

const useMindMapStore = create<MindmapStore>((set) => ({
    currentMindmap: {} as MindMap,
    setCurrentMindmap: (mindmap) => set({ currentMindmap: { ...mindmap } }),
}));

export default useMindMapStore;
