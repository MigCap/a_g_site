import create from 'zustand'

// import { WORKS_IDS } from 'constants/images'

interface IWorksState {
    resetStore: () => void
    //     setImageId: ({
    //         workId,
    //         index,
    //     }: {
    //         workId: WORKS_IDS
    //         index: number
    //     }) => void
    //     setWorksModalIsOpen: (worksModalIsOpen: boolean) => void
}

const getInitialState = (
    set: (
        partial:
            | IWorksState
            | Partial<IWorksState>
            | ((state: IWorksState) => IWorksState | Partial<IWorksState>),
        replace?: boolean | undefined,
    ) => void,
): IWorksState => {
    return {
        resetStore: () => set(getInitialState(set)),
        // setWorksModalIsOpen: (worksModalIsOpen: boolean) =>
        //     set((state: IWorksState) => ({ ...state, worksModalIsOpen })),
        // setImageId: ({ workId, index }: { workId: WORKS_IDS; index: number }) =>
        //     set((state: IWorksState) => ({ ...state })),
    }
}

export const useGlobalStore = create<IWorksState>()(set => getInitialState(set))
