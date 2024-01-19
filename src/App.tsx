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
    DIETARY_LIFE_STYLE_PAGE,
    MAIN_INGREDIENT,
    NUTRIENT,
    PHONE_CONSULTATION_PAGE,
    PHONE_CONSULTATION_DISTRIBUTE_PAGE,
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
import { MainIngredientProductPrintOut } from 'pages/Health-Management-Consultation-Info/components/hmc-modal-components/main-ingredient-product-pdf'
import { NutrientPrintOut } from 'pages/Health-Management-Consultation-Info/components/hmc-modal-components/nutrients-pdf'
import PhoneConsultation from 'pages/Phone-Consultation'
import PhoneConsultationDistribute from 'pages/Phone-Consultation-Distribute'
function App() {
    const data = [
        {
            item: 'TriBiotix P+',
            nutrients:
                'Probiotics(multiple strains), Brewer’s Yeast, Water-soluble Fiber, Vit.B complex , Yeast Ferment Extract, Pimola Extract , Elderberry Extract , Perilla Extract , Gold Colostrum Powder , Lactoferrin , Soy Peptide',
        },
        {
            item: 'NTC Omega 3 Fish Oil',
            nutrients: 'Fish Oil 500mg (contains EPA 180mg, DHA 120mg)',
        },
        {
            item: 'Yeast B Complex with Minerals',
            nutrients:
                'Natural Yeast Extract (contains Vit. B complex, Zinc, Chromium, Selenium)',
        },
        {
            item: 'Protide',
            nutrients:
                'Non-GMO Soybean Refining (Soy Protein) : Contain 17 types of a.a (Included 9 types essential a.a)',
        },
        {
            item: 'Life Vital Fiber Powder',
            nutrients:
                'Oats Extract, Wheat Grass Extract, Garcinia Cambogia, L- Carnitine, Multi-berry powder, Polyphenol',
        },
        {
            item: 'Life Lemon Algae Powder',
            nutrients:
                'Red Algae Powder, Inulin, Citric Acid, Lactic Acid Bacteria (Bifidobacterium Longum)',
        },
        {
            item: 'Vitamin D3',
            nutrients: 'Vitamin D3 800IU',
        },
        {
            item: 'Life Vision Jelly',
            nutrients:
                'Marigold Flower Extract (contains Lutein), Bilberry Extract, Wolfberry Extract, Black Currant Extract, Black Bean Extract, Red Algae Extract (contains Astaxanthin), Vitamin E',
        },
        {
            item: 'Life Flexible Jelly',
            nutrients:
                'Pineapple Extract (contains Bromelain), Malic Acid, Citric Acid, Licorice Extract, Turmeric Extract',
        },
        {
            item: 'Super Phoschol+',
            nutrients:
                'Phosphatidylcholine, Vitamin B1, Vitamin B2, Vitamin B3, Vitamin B6, Vitamin B12, Turmeric Extract',
        },
        {
            item: 'Life Berries',
            nutrients:
                'Probiotics(multiple strains), Brewer’s Yeast, Water-soluble Fiber, Vit.B complex , Yeast Ferment Extract, Pimola Extract , Elderberry Extract , Perilla Extract , Gold Colostrum Powder , Lactoferrin , Soy Peptide',
        },
        {
            item: 'NuTriShake Chocolate/Vanilla',
            nutrients:
                'Probiotics(multiple strains), Brewer’s Yeast, Water-soluble Fiber, Vit.B complex , Yeast Ferment Extract, Pimola Extract , Elderberry Extract , Perilla Extract , Gold Colostrum Powder , Lactoferrin , Soy Peptide',
        },
        {
            item: 'Moringa Pep',
            nutrients:
                'Probiotics(multiple strains), Brewer’s Yeast, Water-soluble Fiber, Vit.B complex , Yeast Ferment Extract, Pimola Extract , Elderberry Extract , Perilla Extract , Gold Colostrum Powder , Lactoferrin , Soy Peptide',
        },
        {
            item: 'Reinsure',
            nutrients:
                'Probiotics(multiple strains), Brewer’s Yeast, Water-soluble Fiber, Vit.B complex , Yeast Ferment Extract, Pimola Extract , Elderberry Extract , Perilla Extract , Gold Colostrum Powder , Lactoferrin , Soy Peptide',
        },
    ]
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
                <Route
                    path={PHONE_CONSULTATION_PAGE}
                    element={<PhoneConsultation />}
                />
                <Route
                    path={PHONE_CONSULTATION_DISTRIBUTE_PAGE}
                    element={<PhoneConsultationDistribute />}
                />
                <Route
                    path={MAIN_INGREDIENT}
                    element={<MainIngredientProductPrintOut fakeData={data} />}
                />
            </Routes>
        </ThemeProvider>
    )
}

export default App
