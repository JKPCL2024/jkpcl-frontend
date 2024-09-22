import { create } from 'zustand';

interface useDeleteMemberStore {
    isOpen: boolean;
    memberId: string;
    setMemberId: (memberId: string) => void;
    openModal: () => void;
    closeModal: () => void;
}

export const useDeleteMember = create<useDeleteMemberStore>()(
    (set) => ({
        isOpen: false,
        memberId: "",
        setMemberId: (memberId: string) => set({ memberId }),
        openModal: () => set({ isOpen: true }),
        closeModal: () => set({ isOpen: false, memberId: "" }),
    })
);

