/* eslint-disable @typescript-eslint/no-explicit-any */
import Home from '../../pages/Home'
import Works from '../../pages/Works/Works'
import Bio from '../../pages/Bio/Bio'
import Contact from '../../pages/Contact'

export enum ROUTES_IDS {
    HOME = 'home',
    WORKS = 'works',
    BIO = 'bio',
    CONTACT = 'contact',
}

export const ROUTES_PATHS = Object.freeze({
    HOME: '/',
    WORKS: `/${ROUTES_IDS.WORKS}`,
    BIO: `/${ROUTES_IDS.BIO}`,
    CONTACT: `/${ROUTES_IDS.CONTACT}`,
})

type TRoutesPathsKeys = keyof typeof ROUTES_PATHS
type TRoutesPathsValues = typeof ROUTES_PATHS[TRoutesPathsKeys]

export type TRoutesConfig = Readonly<{
    [ROUTES_IDS: string]: {
        id: ROUTES_IDS
        path: TRoutesPathsValues
        component: (props: any) => JSX.Element
        exact: boolean
    }
}>

const routesConfig: TRoutesConfig = Object.freeze({
    [ROUTES_IDS.HOME]: {
        id: ROUTES_IDS.HOME,
        path: ROUTES_PATHS.HOME,
        component: Home,
        exact: true,
    },
    [ROUTES_IDS.WORKS]: {
        id: ROUTES_IDS.WORKS,
        path: ROUTES_PATHS.WORKS,
        component: Works,
        exact: true,
    },
    [ROUTES_IDS.BIO]: {
        id: ROUTES_IDS.BIO,
        path: ROUTES_PATHS.BIO,
        component: Bio,
        exact: true,
    },
    [ROUTES_IDS.CONTACT]: {
        id: ROUTES_IDS.CONTACT,
        path: ROUTES_PATHS.BIO,
        component: Contact,
        exact: true,
    },
})

export default routesConfig
