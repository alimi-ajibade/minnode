import { create } from "zustand";

export interface User {
    email: string;
    fullname: string;
}

interface AuthStore {
    user: User;
    login: (user: User) => void;
    logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
    user: {} as User,
    login: (user: User) => {
        set({ user });
    },
    logout: () => {
        set({ user: {} as User });
    },
}));

export default useAuthStore;
