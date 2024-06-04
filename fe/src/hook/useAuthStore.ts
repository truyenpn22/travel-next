import { create } from 'zustand';

interface UserState {
    user: any;
    setUser: (user: any) => void;
    logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null })
}));


export default useUserStore;
