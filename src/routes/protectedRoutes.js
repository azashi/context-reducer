import DashBoardPage from '../pages/protectedPages/DashBoardPage'
import UserDetailsPage from '../pages/protectedPages/UserDetailsPage'

export const protectedRoutes = [
    { path: '/dashboard', component: DashBoardPage },
    { path: '/userdetails', component: UserDetailsPage }
]