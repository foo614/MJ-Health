import { ThemeProvider } from '@mui/material/styles'
import {
    DASHBOARD_PAGE,
    DINING_CHECK_IN_PAGE,
    DINING_MEAL_SETUP_PAGE,
    DINING_PAGE,
    HEALTH_MANAGEMENT_CONSULTATION_INFO_PAGE,
    HEALTH_MANAGEMENT_CONSULTATION_PAGE,
    IT_MONITOR_ROOM_PAGE,
    IT_ROOM_PRINTING_PAGE,
    KIOSK_PAGE,
    LAB_TEST_INFO_PAGE,
    LAB_TEST_PAGE,
    LAB_TEST_SINGLE_ITEM_PAGE,
    LOGIN_PAGE,
    MEMBER_PROFILE_PAGE,
    MONITOR_SYSTEM_PAGE,
    MUL_REPORT_PAGE,
    PHYSICIAN_CONSULTATION_INFO_PAGE,
    PHYSICIAN_CONSULTATION_PAGE,
    QUEUE_MANAGEMENT_PAGE,
    RADIOLOGY_REPORTING_PAGE,
    RECEPTION_PAGE,
    SETTING_PAGE,
    STAFF_MANAGEMENT_PAGE,
    STAFF_PROFILE_NEW_PAGE,
    STAFF_PROFILE_PAGE,
    STICKER_PRINTING_PAGE,
} from 'constant'
import Dashboard from 'pages/Dashboard'
import Dining from 'pages/Dining'
import DiningCheckIn from 'pages/Dining-Check-In'
import HealthManagementConsultation from 'pages/Health-Management-Consultation'
import HealthManagementConsultationInfo from 'pages/Health-Management-Consultation-Info'
import ITRoomMonitor from 'pages/IT-Room-Monitor'
import ITRoomPrintingPage from 'pages/IT-Room-Printing'
import Kiosk from 'pages/Kiosk'
import LabPage from 'pages/Lab'
import LabInfo from 'pages/Lab/lab-info'
import LabSingleItemPage from 'pages/Lab/single-item'
import Login from 'pages/Login'
import MULReport from 'pages/MUL-Report'
import MULReportDetail from 'pages/MUL-Report/components/details'
import MULReportDetailTable from 'pages/MUL-Report/components/report'
import MealSetup from 'pages/Meal-Setup'
import MemberProfile from 'pages/Member-Profile'
import MonitorSystem from 'pages/Monitor-System'
import PhysicianConsultation from 'pages/Physician-Consultation'
import PhysicianConsultationInfo from 'pages/Physician-Consultation-Info'
import QueueManagement from 'pages/Queue-Management'
import QueueManagementList from 'pages/Queue-Management/components/queue-list'
import RadiologyReport from 'pages/Radiology-Reporting'
import RadiologyReportDetail from 'pages/Radiology-Reporting/components/details'
import Reception from 'pages/Reception'
import Setting from 'pages/Setting'
import StaffManagement from 'pages/Staff-Management'
import StaffProfile from 'pages/Staff-Profile'
import StaffProfileNew from 'pages/Staff-Profile-New'
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
                <Route
                    path={IT_ROOM_PRINTING_PAGE}
                    element={<ITRoomPrintingPage />}
                />
                <Route
                    path={PHYSICIAN_CONSULTATION_PAGE}
                    element={<PhysicianConsultation />}
                />
                <Route
                    path={PHYSICIAN_CONSULTATION_INFO_PAGE + '/:id'}
                    element={<PhysicianConsultationInfo />}
                />
                <Route
                    path={STAFF_MANAGEMENT_PAGE}
                    element={<StaffManagement />}
                />
                <Route path={STAFF_PROFILE_PAGE} element={<StaffProfile />} />
                <Route
                    path={STAFF_PROFILE_NEW_PAGE}
                    element={<StaffProfileNew />}
                />
                <Route
                    path={STAFF_PROFILE_PAGE + '/:id'}
                    element={<StaffProfile />}
                />
                <Route
                    path={HEALTH_MANAGEMENT_CONSULTATION_PAGE}
                    element={<HealthManagementConsultation />}
                />
                <Route
                    path={HEALTH_MANAGEMENT_CONSULTATION_INFO_PAGE + '/:id'}
                    element={<HealthManagementConsultationInfo />}
                />
                <Route path={MUL_REPORT_PAGE} element={<MULReport />} />
                <Route
                    path={MUL_REPORT_PAGE + '/:id'}
                    element={<MULReportDetail />}
                />
                <Route
                    path={MUL_REPORT_PAGE + '/:id' + '/:reportId'}
                    element={<MULReportDetailTable />}
                />
                {/* <Route path={TEST_PDPA_PAGE} element={<TestPDPAPage />} /> */}
            </Routes>
        </ThemeProvider>
    )
}

export default App
