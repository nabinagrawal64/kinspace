import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            isAuthenticated: false,
            loading: false,
            otp: null,

            setAuthData: (user, token) => {
                set({ user, token, isAuthenticated: true });
            },

            setLoading: (isLoading) => {
                set({ loading: isLoading });
            },

            setOtp: (otp) => {
                set({ otp: otp });
            },

            logout: () => {
                set({ token: null, isAuthenticated: false });
            },

            setDeleteUser: () => {
                set({ user: null, token: null, isAuthenticated: false });
            },
            
        }),
        {
            name: "auth-storage",
            getStorage: () => localStorage,
        }
    )
);
