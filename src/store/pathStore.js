import { create } from 'zustand';

export const usePathStore = create((set, get) => ({
    path: '/',
    setPath: (newPath) => set(() => ({ path: newPath }))
}));