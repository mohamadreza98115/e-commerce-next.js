import {create} from 'zustand';

interface UserType {
    id: string,
    name: string,
    email: string,
    image: string
}

const useUserStore = create({
    user: {},
    setUserData: (User: object) => set(() => ({user: User}))
});

export default useUserStore