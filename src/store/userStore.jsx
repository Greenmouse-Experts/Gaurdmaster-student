import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const userInitState = {
    name: '',
    email: '',
    token: '',
    image: '',
    state: '',
    account: '',
    phone: '',
    id: ''
}
const useAuthStore = create()(
  persist(
    (set) => ({
      user: userInitState,
      saveUser: (data) =>
        set(() => ({
          user: data,
        })),
      clearUser: () =>
        set(() => ({
          user: userInitState,
        })),
    }),
    {
      name: "guard_user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;