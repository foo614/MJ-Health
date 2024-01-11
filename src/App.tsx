import { ThemeProvider } from '@mui/material/styles'
import {
    DASHBOARD_PAGE,
    DINING_CHECK_IN_PAGE,
    DINING_MEAL_SETUP_PAGE,
    DINING_PAGE,
    IT_MONITOR_ROOM_PAGE,
    KIOSK_PAGE,
    LAB_TEST_INFO_PAGE,
    LAB_TEST_PAGE,
    LAB_TEST_SINGLE_ITEM_PAGE,
    LOGIN_PAGE,
    MEMBER_PROFILE_PAGE,
    MONITOR_SYSTEM_PAGE,
    QUEUE_MANAGEMENT_PAGE,
    RADIOLOGY_REPORTING_PAGE,
    RECEPTION_PAGE,
    SETTING_PAGE,
    STICKER_PRINTING_PAGE,
    TEST_PDPA_PAGE,
} from 'constant'
import Dashboard from 'pages/Dashboard'
import Dining from 'pages/Dining'
import DiningCheckIn from 'pages/Dining-Check-In'
import ITRoomMonitor from 'pages/IT-Room-Monitor'
import Kiosk from 'pages/Kiosk'
import LabPage from 'pages/Lab'
import LabInfo from 'pages/Lab/lab-info'
import LabSingleItemPage from 'pages/Lab/single-item'
import Login from 'pages/Login'
import MealSetup from 'pages/Meal-Setup'
import MemberProfile from 'pages/Member-Profile'
import MonitorSystem from 'pages/Monitor-System'
import QueueManagement from 'pages/Queue-Management'
import QueueManagementList from 'pages/Queue-Management/components/queue-list'
import RadiologyReport from 'pages/Radiology-Reporting'
import RadiologyReportDetail from 'pages/Radiology-Reporting/components/details'
import Reception from 'pages/Reception'
import Setting from 'pages/Setting'
import StickerPrinting from 'pages/Sticker-Printing'
import { Navigate, Route, Routes } from 'react-router-dom'
import './i18n'
import './styles/main.scss'
import theme from './styles/theme'
import { TestPDPAPage } from 'pages/Member-Profile/components/test-pdpa-page'
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
                <Route path={KIOSK_PAGE} element={<Kiosk />} />
                <Route
                    path={QUEUE_MANAGEMENT_PAGE}
                    element={<QueueManagement />}
                />
                <Route
                    path={QUEUE_MANAGEMENT_PAGE + '/:id'}
                    element={<QueueManagementList />}
                />
                <Route path={RECEPTION_PAGE} element={<Reception />} />
                <Route
                    path={MEMBER_PROFILE_PAGE + '/:id'}
                    element={<MemberProfile />}
                />
                <Route
                    path={IT_MONITOR_ROOM_PAGE}
                    element={<ITRoomMonitor />}
                />
                <Route
                    path={RADIOLOGY_REPORTING_PAGE}
                    element={<RadiologyReport />}
                />
                <Route
                    path={RADIOLOGY_REPORTING_PAGE + '/:id'}
                    element={<RadiologyReportDetail />}
                />
                <Route path={TEST_PDPA_PAGE} element={<TestPDPAPage />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
