import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'



export const publicRoutes = [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginPage },
    { path: "/signup", component: SignUpPage }
]