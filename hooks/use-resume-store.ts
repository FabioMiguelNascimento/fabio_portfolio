"use client";

import { create } from "zustand";

type ResumeState = {
  resumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
  toggleResume: () => void;
};

export const useResumeStore = create<ResumeState>((set) => ({
  resumeOpen: false,
  openResume: () => set(() => ({ resumeOpen: true })),
  closeResume: () => set(() => ({ resumeOpen: false })),
  toggleResume: () => set((s) => ({ resumeOpen: !s.resumeOpen })),
}));
