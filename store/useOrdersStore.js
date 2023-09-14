import {create} from "zustand";


const useOrdersStore = create(set => ({
    value: 0,
    openDrawer: false,
    setOpenDrawer: (value) => set(() => ({openDrawer: value})),
    closeDrawer: () => set(() => ({openDrawer: false})),
    setValue: (value) => set => (store => ({value})),
    reset: () => set(() => ({value: 0}))
}));

export default useOrdersStore;