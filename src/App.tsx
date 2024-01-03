import { ThemeProvider } from '@mui/material/styles'
import {
    DASHBOARD_PAGE,
    DINING_CHECK_IN_PAGE,
    DINING_MEAL_SETUP_PAGE,
    DINING_PAGE,
    LAB_TEST_INFO_PAGE,
    LAB_TEST_PAGE,
    LAB_TEST_SINGLE_ITEM_PAGE,
    LOGIN_PAGE,
    MONITOR_SYSTEM_PAGE,
    SETTING_PAGE,
    STICKER_PRINTING_PAGE,
    PRINTING_STICKER_TEST_PAGE
} from 'constant'
import Dashboard from 'pages/Dashboard'
import Dining from 'pages/Dining'
import DiningCheckIn from 'pages/Dining-Check-In'
import LabPage from 'pages/Lab'
import LabInfo from 'pages/Lab/lab-info'
import LabSingleItemPage from 'pages/Lab/single-item'
import Login from 'pages/Login'
import MealSetup from 'pages/Meal-Setup'
import MonitorSystem from 'pages/Monitor-System'
import Setting from 'pages/Setting'
import StickerPrinting from 'pages/Sticker-Printing'
import { Navigate, Route, Routes } from 'react-router-dom'
import './i18n'
import './styles/main.scss'
import theme from './styles/theme'
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace={true} />}
                />
                <Route path={SETTING_PAGE} element={<Setting />} />
                <Route path={LOGIN_PAGE} element={<Login />} />
                <Route path={DASHBOARD_PAGE} element={<Dashboard />} />
                <Route path={LAB_TEST_PAGE} element={<LabPage />} />
                <Route
                    path={LAB_TEST_SINGLE_ITEM_PAGE}
                    element={<LabSingleItemPage />}
                />
                <Route path={LAB_TEST_INFO_PAGE} element={<LabInfo />} />
                <Route path={DINING_PAGE} element={<Dining />} />
                <Route
                    path={DINING_CHECK_IN_PAGE}
                    element={<DiningCheckIn />}
                />
                <Route path={DINING_MEAL_SETUP_PAGE} element={<MealSetup />} />
                <Route path={MONITOR_SYSTEM_PAGE} element={<MonitorSystem />} />
                <Route
                    path={STICKER_PRINTING_PAGE}
                    element={<StickerPrinting />}
                />
                {/* <Route path={PRINTING_STICKER_TEST_PAGE} element={<PrintingTest />} /> */}
            </Routes>
        </ThemeProvider>
    )
}

export default App
