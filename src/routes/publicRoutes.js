import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import Help from '../pages/Help'
import { PATHS } from './PATHS'

const { ROOT_PATH, LOGIN_PATH, SIGNUP_PATH, HELP_PATH } = PATHS.publicPaths

export const publicRoutes = [
    { path: ROOT_PATH, component: HomePage },
    { path: LOGIN_PATH, component: LoginPage },
    { path: SIGNUP_PATH, component: SignUpPage },
    { path: HELP_PATH, component: Help }
]