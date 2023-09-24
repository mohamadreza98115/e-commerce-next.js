import {create} from "zustand";

interface orderTypes {
    value: [];
    openDrawer: boolean;
    setOpenDrawer: (value: boolean) => void;
    closeDrawer: () => void;
    setValue: (value: object) => void;
    reset: () => void;
}

const useOrdersStore = create<orderTypes>(set => ({
    value: [],
    openDrawer: false,
    setOpenDrawer: (value: any) => set(() => ({openDrawer: value})),
    closeDrawer: () => set(() => ({openDrawer: false})),
    setValue: (value: object) => set = () => ((store: []) => ([...store, value])),
    reset: () => set(() => ({value: []}))
}));

export default useOrdersStore;