import { ThemeProvider } from '@mui/material/styles'
import Counter from 'components/Counter'
import {
    DASHBOARD_PAGE,
    DINING_CHECK_IN_PAGE,
    DINING_PAGE,
    LAB_TEST_INFO_PAGE,
    LAB_TEST_PAGE,
    LAB_TEST_SINGLE_ITEM_PAGE,
    LOGIN_PAGE,
    DINING_MEAL_SETUP_PAGE,
    MONITOR_SYSTEM_PAGE,
    STICKER_PRINTING_PAGE,
} from 'constant'
import Dashboard from 'pages/Dashboard'
import LabPage from 'pages/Lab'
import LabInfo from 'pages/Lab/lab-info'
import LabSingleItemPage from 'pages/Lab/single-item'
import Login from 'pages/Login'
import { Route, Routes } from 'react-router-dom'
import './i18n'
import './styles/main.scss'
import theme from './styles/theme'
import Dining from 'pages/Dining'
import DiningCheckIn from 'pages/Dining-Check-In'
import MealSetup from 'pages/Meal-Setup'
import MonitorSystem from 'pages/Monitor-System'
import StickerPrinting from 'pages/Sticker-Printing'
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Counter />} />
                <Route path="/2" element={<Counter />} />
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
            </Routes>
        </ThemeProvider>
    )
}

export default App
