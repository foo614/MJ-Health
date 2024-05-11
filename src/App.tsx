import { ThemeProvider } from '@mui/material/styles'
import {
    AUDIOMETRY_PAGE,
    BONE_MINERAL_DENSITY_PAGE,
    CT_SCAN_PAGE,
    DASHBOARD_PAGE,
    DINING_CHECK_IN_PAGE,
    DINING_MEAL_SETUP_PAGE,
    DINING_PAGE,
    ELECTROCARDIOGRAM_PAGE,
    ENT_EXAMINATION_PAGE,
    FINAL_REPORT,
    FINAL_REPORT_AUDIOMETRY,
    FINAL_REPORT_BONE_MINERAL_DENSITY,
    FINAL_REPORT_CT_SCAN,
    FINAL_REPORT_ELECTROCARDIOGRAM,
    FINAL_REPORT_ENT_EXAMINATION,
    FINAL_REPORT_GENERAL_MEASUREMENT,
    FINAL_REPORT_HMC_RECORD,
    FINAL_REPORT_HMP_BROCHURE,
    FINAL_REPORT_INTERVIEW_PAGE,
    FINAL_REPORT_LUNG_FUNCTION_TEST,
    FINAL_REPORT_MAMMOGRAPHY,
    FINAL_REPORT_MPA,
    FINAL_REPORT_PAPS_SMEAR,
    FINAL_REPORT_PAPS_SMEAR_EXAM,
    FINAL_REPORT_PERIPHERAL_VASCULAR_SCREENING,
    FINAL_REPORT_RETINOGRAPHY,
    FINAL_REPORT_SONOGRAPHY,
    FINAL_REPORT_SUPPLEMENTARY_REPORT,
    FINAL_REPORT_VISION_AND_OCULAR_TENSION_TEST,
    FINAL_REPORT_X_RAY,
    GENERAL_MEASUREMENT_PAGE,
    HEALTH_MANAGEMENT_CONSULTATION_INFO_PAGE,
    HEALTH_MANAGEMENT_CONSULTATION_PAGE,
    INTERVIEW_INFO_PAGE,
    INTERVIEW_PAGE,
    INTERVIEW_QUESTIONAIRE_PAGE,
    IT_MONITOR_ROOM_PAGE,
    IT_ROOM_PRINTING_PAGE,
    KIOSK_PAGE,
    LAB_TEST_INFO_PAGE,
    LAB_TEST_PAGE,
    LAB_TEST_SINGLE_ITEM_PAGE,
    LOGIN_PAGE,
    LUNG_FUNCTION_TEST_PAGE,
    MAIN_INGREDIENT,
    MAMMOGRAPHY_PAGE,
    MEMBER_PROFILE_PAGE,
    MONITOR_SYSTEM_PAGE,
    MUL_REPORT_PAGE,
    PAPS_SMEAR_PAGE,
    PERIPHERAL_VASCULAR_SCREENING_PAGE,
    PHONE_CONSULTATION_DISTRIBUTE_PAGE,
    PHONE_CONSULTATION_PAGE,
    PHYSICIAN_CONSULTATION_INFO_PAGE,
    PHYSICIAN_CONSULTATION_PAGE,
    QUEUE_MANAGEMENT_PAGE,
    RADIOLOGY_REPORTING_PAGE,
    RECEPTION_PAGE,
    RETINOGRAPHY_PAGE,
    ROOM_MANAGEMENT_PAGE,
    SETTING_PAGE,
    SONOGRAPHY_PAGE,
    STAFF_MANAGEMENT_PAGE,
    STAFF_PROFILE_NEW_PAGE,
    STAFF_PROFILE_PAGE,
    STICKER_PRINTING_PAGE,
    VIEW_COMMENT_PAGE,
    VISION_AND_OCULAR_TENSION_TEST_PAGE,
    X_RAY_PAGE,
} from 'constant'
import Dashboard from 'pages/Dashboard'
import Dining from 'pages/Dining'
import DiningCheckIn from 'pages/Dining-Check-In'
import FinalReport from 'pages/Final-Report'
import HealthManagementConsultation from 'pages/Health-Management-Consultation'
import HealthManagementConsultationInfo from 'pages/Health-Management-Consultation-Info'
import { MainIngredientProductPrintOut } from 'pages/Health-Management-Consultation-Info/components/hmc-modal-components/main-ingredient-product-pdf'
import ITRoomMonitor from 'pages/IT-Room-Monitor'
import ITRoomPrintingPage from 'pages/IT-Room-Printing'
import Interview from 'pages/Interview'
import InterviewInfo from 'pages/Interview-Info'
import InterviewQuestionaire from 'pages/Interview-Questionaire'
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
import PhoneConsultation from 'pages/Phone-Consultation'
import PhoneConsultationDistribute from 'pages/Phone-Consultation-Distribute'
import PhysicianConsultation from 'pages/Physician-Consultation'
import PhysicianConsultationInfo from 'pages/Physician-Consultation-Info'
import QueueManagement from 'pages/Queue-Management'
import QueueManagementList from 'pages/Queue-Management/components/queue-list'
import RadiologyReport from 'pages/Radiology-Reporting'
import RadiologyReportDetail from 'pages/Radiology-Reporting/components/details'
import Reception from 'pages/Reception'
import RoomManagement from 'pages/Room-Management'
import Audiometry from 'pages/Screening-Room-System/Audiometry'
import AudiometryDetail from 'pages/Screening-Room-System/Audiometry/detail'
import BoneMineralDensity from 'pages/Screening-Room-System/Bone-Mineral-Density'
import BoneMineralDensityInfo from 'pages/Screening-Room-System/Bone-Mineral-Density/Bone-Mineral-Density-Info'
import CTScan from 'pages/Screening-Room-System/CT-Scan'
import CTScanDetail from 'pages/Screening-Room-System/CT-Scan/details'
import ENTExamination from 'pages/Screening-Room-System/ENT-Examination'
import ENTExaminationDetail from 'pages/Screening-Room-System/ENT-Examination/detail'
import Electrocardiogram from 'pages/Screening-Room-System/Electrocardiogram'
import ElectrocardiogramDetail from 'pages/Screening-Room-System/Electrocardiogram/detail'
import GeneralMeasurement from 'pages/Screening-Room-System/General-Measurement'
import GeneralMeasurementDetail from 'pages/Screening-Room-System/General-Measurement/detail'
import LungFuntionTest from 'pages/Screening-Room-System/Lung-Function-Test'
import LungFunctionTestDetail from 'pages/Screening-Room-System/Lung-Function-Test/detail'
import Mammography from 'pages/Screening-Room-System/Mammography'
import MammographyDetail from 'pages/Screening-Room-System/Mammography/detail'
import PapsSmear from 'pages/Screening-Room-System/Paps-Smear'
import PapsSmearDetail from 'pages/Screening-Room-System/Paps-Smear/detail'
import PeripheralVascularScreening from 'pages/Screening-Room-System/Peripheral-Vascular-Screening'
import PeripheralVascularScreeningDetail from 'pages/Screening-Room-System/Peripheral-Vascular-Screening/detail'
import Retinography from 'pages/Screening-Room-System/Retinography'
import RetinographyDetail from 'pages/Screening-Room-System/Retinography/detail'
import Sonography from 'pages/Screening-Room-System/Sonography'
import SonographyDetail from 'pages/Screening-Room-System/Sonography/detail'
import VisualAndOcularTension from 'pages/Screening-Room-System/Visual-And-Ocular-Tension-Test'
import VisualAndOcularTensionDetail from 'pages/Screening-Room-System/Visual-And-Ocular-Tension-Test/detail'
import XRay from 'pages/Screening-Room-System/X-Ray'
import XRayDetail from 'pages/Screening-Room-System/X-Ray/detail'
import Setting from 'pages/Setting'
import StaffManagement from 'pages/Staff-Management'
import StaffProfile from 'pages/Staff-Profile'
import StaffProfileNew from 'pages/Staff-Profile-New'
import StickerPrinting from 'pages/Sticker-Printing'
import { Navigate, Route, Routes } from 'react-router-dom'
import './i18n'
import './styles/main.scss'
import theme from './styles/theme'
import FinalReportInterview from 'pages/Final-Report/Interview'
import HMPBrochure from 'pages/Final-Report/HMC-Brochure'
import PapsSmearExam from 'pages/Final-Report/Paps-Smear-Exam'
import HMCRecord from 'pages/Final-Report/HMC-Record'
import MPA from 'pages/Final-Report/MPA'
import FinalReportAudiometry from 'pages/Final-Report/Audiometry'
import FinalReportBoneMineralDensity from 'pages/Final-Report/Bone-Mineral-Density'
import FinalReportENTExamination from 'pages/Final-Report/ENT-Examination'
import FinalReportGeneralMeasurement from 'pages/Final-Report/General-Measurement'
import FinalReportElectrocardiogram from 'pages/Final-Report/Electrocardiogram'
import FinalReportMammography from 'pages/Final-Report/Mammography'
import FinalReportLungFunctionTest from 'pages/Final-Report/Lung-Function-Test'
import FinalReportPeripheralVascularScreening from 'pages/Final-Report/Peripheral-Vascular-Screening'
import FinalReportRetinography from 'pages/Final-Report/Retinography'
import FinalReportVisualAndOcularTensionTest from 'pages/Final-Report/Visual-And-Ocular-Tension-Test'
import FinalReportXRay from 'pages/Final-Report/X-Ray'
import FinalReportSonography from 'pages/Final-Report/Sonography'
import FinalReportPapsSmear from 'pages/Final-Report/Paps-Smear'
import SupplementaryReport from 'pages/Final-Report/Supplementary-Report'
import FinalReportCTScan from 'pages/Final-Report/CT-Scan'
import QueueManagementReceptionCounter from 'pages/Queue-Management/components/reception-counter'

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
                    path={QUEUE_MANAGEMENT_PAGE + '/:areaId'}
                    element={<QueueManagementList />}
                />
                <Route
                    path={QUEUE_MANAGEMENT_PAGE + '/reception-counter'}
                    element={<QueueManagementReceptionCounter />}
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
                <Route
                    path={ROOM_MANAGEMENT_PAGE}
                    element={<RoomManagement />}
                />
                <Route path={INTERVIEW_PAGE} element={<Interview />} />
                <Route
                    path={INTERVIEW_INFO_PAGE + '/:id'}
                    element={<InterviewInfo />}
                />
                <Route
                    path={BONE_MINERAL_DENSITY_PAGE}
                    element={<BoneMineralDensity />}
                />
                <Route
                    path={BONE_MINERAL_DENSITY_PAGE + '/:id'}
                    element={<BoneMineralDensityInfo />}
                />
                <Route path={SONOGRAPHY_PAGE} element={<Sonography />} />
                <Route
                    path={SONOGRAPHY_PAGE + '/:id'}
                    element={<SonographyDetail />}
                />
                <Route path={AUDIOMETRY_PAGE} element={<Audiometry />} />
                <Route
                    path={AUDIOMETRY_PAGE + '/:id'}
                    element={<AudiometryDetail />}
                />
                <Route path={CT_SCAN_PAGE} element={<CTScan />} />
                <Route
                    path={CT_SCAN_PAGE + '/:id'}
                    element={<CTScanDetail />}
                />
                <Route
                    path={ELECTROCARDIOGRAM_PAGE}
                    element={<Electrocardiogram />}
                />
                <Route
                    path={ELECTROCARDIOGRAM_PAGE + '/:id'}
                    element={<ElectrocardiogramDetail />}
                />
                <Route
                    path={ENT_EXAMINATION_PAGE}
                    element={<ENTExamination />}
                />
                <Route
                    path={ENT_EXAMINATION_PAGE + '/:id'}
                    element={<ENTExaminationDetail />}
                />
                <Route
                    path={GENERAL_MEASUREMENT_PAGE}
                    element={<GeneralMeasurement />}
                />
                <Route
                    path={GENERAL_MEASUREMENT_PAGE + '/:id'}
                    element={<GeneralMeasurementDetail />}
                />
                <Route
                    path={LUNG_FUNCTION_TEST_PAGE}
                    element={<LungFuntionTest />}
                />
                <Route
                    path={LUNG_FUNCTION_TEST_PAGE + '/:id'}
                    element={<LungFunctionTestDetail />}
                />{' '}
                <Route path={MAMMOGRAPHY_PAGE} element={<Mammography />} />
                <Route
                    path={MAMMOGRAPHY_PAGE + '/:id'}
                    element={<MammographyDetail />}
                />
                <Route
                    path={PERIPHERAL_VASCULAR_SCREENING_PAGE}
                    element={<PeripheralVascularScreening />}
                />
                <Route
                    path={PERIPHERAL_VASCULAR_SCREENING_PAGE + '/:id'}
                    element={<PeripheralVascularScreeningDetail />}
                />
                <Route path={PAPS_SMEAR_PAGE} element={<PapsSmear />} />
                <Route
                    path={PAPS_SMEAR_PAGE + '/:id'}
                    element={<PapsSmearDetail />}
                />
                <Route path={RETINOGRAPHY_PAGE} element={<Retinography />} />
                <Route
                    path={RETINOGRAPHY_PAGE + '/:id'}
                    element={<RetinographyDetail />}
                />
                <Route
                    path={VISION_AND_OCULAR_TENSION_TEST_PAGE}
                    element={<VisualAndOcularTension />}
                />
                <Route
                    path={VISION_AND_OCULAR_TENSION_TEST_PAGE + '/:id'}
                    element={<VisualAndOcularTensionDetail />}
                />
                <Route path={X_RAY_PAGE} element={<XRay />} />
                <Route path={X_RAY_PAGE + '/:id'} element={<XRayDetail />} />
                <Route path={VIEW_COMMENT_PAGE} element={<></>} />
                <Route path={VIEW_COMMENT_PAGE + '/:id'} element={<></>} />
                <Route
                    path={
                        INTERVIEW_INFO_PAGE +
                        '/:id' +
                        INTERVIEW_QUESTIONAIRE_PAGE
                    }
                    element={<InterviewQuestionaire />}
                />
                <Route path={FINAL_REPORT} element={<FinalReport />} />
                <Route
                    path={FINAL_REPORT_INTERVIEW_PAGE}
                    element={<FinalReportInterview />}
                />
                <Route
                    path={FINAL_REPORT_HMP_BROCHURE}
                    element={<HMPBrochure />}
                />
                <Route
                    path={FINAL_REPORT_PAPS_SMEAR}
                    element={<FinalReportPapsSmear />}
                />
                <Route
                    path={FINAL_REPORT_PAPS_SMEAR_EXAM}
                    element={<PapsSmearExam />}
                />
                <Route path={FINAL_REPORT_HMC_RECORD} element={<HMCRecord />} />
                <Route path={FINAL_REPORT_MPA} element={<MPA />} />
                <Route
                    path={FINAL_REPORT_AUDIOMETRY}
                    element={<FinalReportAudiometry />}
                />
                <Route
                    path={FINAL_REPORT_BONE_MINERAL_DENSITY}
                    element={<FinalReportBoneMineralDensity />}
                />
                <Route
                    path={FINAL_REPORT_CT_SCAN}
                    element={<FinalReportCTScan />}
                />
                <Route
                    path={FINAL_REPORT_ENT_EXAMINATION}
                    element={<FinalReportENTExamination />}
                />
                <Route
                    path={FINAL_REPORT_GENERAL_MEASUREMENT}
                    element={<FinalReportGeneralMeasurement />}
                />
                <Route
                    path={FINAL_REPORT_ELECTROCARDIOGRAM}
                    element={<FinalReportElectrocardiogram />}
                />
                <Route
                    path={FINAL_REPORT_MAMMOGRAPHY}
                    element={<FinalReportMammography />}
                />
                <Route
                    path={FINAL_REPORT_LUNG_FUNCTION_TEST}
                    element={<FinalReportLungFunctionTest />}
                />
                <Route
                    path={FINAL_REPORT_PERIPHERAL_VASCULAR_SCREENING}
                    element={<FinalReportPeripheralVascularScreening />}
                />
                <Route
                    path={FINAL_REPORT_RETINOGRAPHY}
                    element={<FinalReportRetinography />}
                />
                <Route
                    path={FINAL_REPORT_SONOGRAPHY}
                    element={<FinalReportSonography />}
                />
                <Route
                    path={FINAL_REPORT_VISION_AND_OCULAR_TENSION_TEST}
                    element={<FinalReportVisualAndOcularTensionTest />}
                />
                <Route
                    path={FINAL_REPORT_X_RAY}
                    element={<FinalReportXRay />}
                />
                <Route
                    path={FINAL_REPORT_SUPPLEMENTARY_REPORT}
                    element={<SupplementaryReport />}
                />
            </Routes>
        </ThemeProvider>
    )
}

export default App
