import { create } from "zustand";
import User from "../types/user.type";
import useLocalStorage from "../hooks/useLocalStorage";

type UseUserStoreProps = {
  setUserData: ({ id, token, name }: User) => void;
  getUserData: () => void;
  clearUserData: () => void;
};

const useUserStore = create<User & UseUserStoreProps>(set => ({
  id: null,
  name: null,
  token: null,

  getUserData: () => {
    const user = JSON.parse(localStorage.getItem("user")!) as User;

    set({ ...user });
  },
  setUserData: ({ id, token, name }: User) => set({ id, name, token }),
  clearUserData: () => set({ id: null, name: null, token: null }),
}));

export default useUserStore;
