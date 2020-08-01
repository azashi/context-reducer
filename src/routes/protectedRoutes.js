import DashBoardPage from '../pages/protectedPages/DashBoardPage'
import UserDetailsPage from '../pages/protectedPages/UserDetailsPage'
import { PATHS } from './PATHS'

const { DASHBOARD_PATH, USER_DETAILS_PATH } = PATHS.protectedPaths

export const protectedRoutes = [
    { path: DASHBOARD_PATH, component: DashBoardPage },
    { path: USER_DETAILS_PATH, component: UserDetailsPage }
]