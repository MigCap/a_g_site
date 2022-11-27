import create from 'zustand'

export type TWorkModalIsOpen = boolean
export type TSetWorksModalIsOpen = (worksModalIsOpen: boolean) => void

interface GlobalState {
    worksModalIsOpen: TWorkModalIsOpen
    setWorksModalIsOpen: (worksModalIsOpen: boolean) => void
}

export const useGlobalStore = create<GlobalState>()(set => ({
    worksModalIsOpen: false,
    setWorksModalIsOpen: (worksModalIsOpen: boolean) =>
        set((state: GlobalState) => ({ ...state, worksModalIsOpen })),
}))
