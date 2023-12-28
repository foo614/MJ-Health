import ResponsiveAppBar from 'components/AppBar.tsx'
import Cardiogram from 'images/cardiogram-1@2x.png'
import Chat1 from 'images/chat-1-1@2x.png'
import File1 from 'images/file-1@2x.png'
import Group1 from 'images/group-1@2x.png'
import GroupIcon from 'images/group-3091@2x.png'
import Group2 from 'images/group@2x.png'
import HandTouch from 'images/handtouchingtabletscreen-1@2x.png'
import HeadPhones from 'images/headphones-1@2x.png'
import HotFood from 'images/hotfood-1-2@2x.png'
import LineIcon from 'images/line-1@2x.png'
import Monitor from 'images/monitor-1@2x.png'
import MulIcon from 'images/mul-1@2x.png'
import Other2 from 'images/other-2@2x.png'
import PhoneIcon from 'images/phone-1-1@2x.png'
import Printer from 'images/printer-1-1@2x.png'
import RoomIcon from 'images/room-1-1@2x.png'
import Frame2 from 'images/screening-1@2x.png'
import Swab from 'images/swab-1@2x.png'
import Vector2 from 'images/vector-1-1@2x.png'
import { FunctionComponent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './_dashboard.module.scss'
import CheckInLabTest2 from './components/check-in-lab-test2'
import CheckInScreeningRoom1 from './components/check-in-screening-room1'
import ConsultationCheckIn from './components/consultation-check-in'
import PortalPopup from './components/portal-popup'

const Dashboard: FunctionComponent = () => {
    const [isCheckInLabTest2Open, setCheckInLabTest2Open] = useState(false)
    const [isConsultationCheckInOpen, setConsultationCheckInOpen] =
        useState(false)
    const [isCheckInScreeningRoom1Open, setCheckInScreeningRoom1Open] =
        useState(false)
    const navigate = useNavigate()

    const onRectangleClick = useCallback(() => {
        // Please sync "IT Room Monitor" to the project
    }, [])

    const onRectangle1Click = useCallback(() => {
        // Please sync "IT Room Printing - Health Screening Report" to the project
    }, [])

    const onRectangle2Click = useCallback(() => {
        // Please sync "Staff Management" to the project
    }, [])

    const onRectangle3Click = useCallback(() => {
        // Please sync "MUL Report" to the project
    }, [])

    const onRectangle4Click = useCallback(() => {
        // Please sync "Word Bank" to the project
    }, [])

    const onRectangle5Click = useCallback(() => {
        // Please sync "Room Management 3" to the project
    }, [])

    const onRectangle6Click = useCallback(() => {
        // Please sync "Final Report - Main Page 2" to the project
    }, [])

    const onGroupContainer1Click = useCallback(() => {
        // Please sync "Phone Consultation 2" to the project
    }, [])

    const openCheckInLabTest2 = useCallback(() => {
        setCheckInLabTest2Open(true)
    }, [])

    const closeCheckInLabTest2 = useCallback(() => {
        setCheckInLabTest2Open(false)
    }, [])

    const onRectangle9Click = useCallback(() => {
        // Please sync "Dining" to the project
    }, [])

    const onRectangle10Click = useCallback(() => {
        // Please sync "Home" to the project
    }, [])

    const onRectangle11Click = useCallback(() => {
        // Please sync "Queue Management 1" to the project
    }, [])

    const onRectangle12Click = useCallback(() => {
        // Please sync "Monitor System" to the project
    }, [])

    const onRectangle13Click = useCallback(() => {
        // Please sync "Reception Counter UI 2" to the project
    }, [])

    const openConsultationCheckIn = useCallback(() => {
        setConsultationCheckInOpen(true)
    }, [])

    const closeConsultationCheckIn = useCallback(() => {
        setConsultationCheckInOpen(false)
    }, [])

    const openCheckInScreeningRoom1 = useCallback(() => {
        setCheckInScreeningRoom1Open(true)
    }, [])

    const closeCheckInScreeningRoom1 = useCallback(() => {
        setCheckInScreeningRoom1Open(false)
    }, [])

    const onRectangle16Click = useCallback(() => {
        // Please sync "Print Sticker" to the project
    }, [])

    const onRectangle18Click = useCallback(() => {
        // Please sync "Login" to the project
    }, [])

    const onRectangle19Click = useCallback(() => {
        // Please sync "Setting" to the project
    }, [])

    const onFrame1Click = useCallback(() => {
        navigate('/')
    }, [navigate])

    const onRectangle20Click = useCallback(() => {
        // Please sync "Radiology Reporting 1" to the project
    }, [])

    return (
        <>
            <ResponsiveAppBar />
            <div className={styles.dashboard}>
                <div className={styles.southernGelangPatahParent}>
                    <div className={styles.southernGelangPatah}>
                        SOUTHERN, GELANG PATAH
                    </div>
                    <div className={styles.mjHealth}>MJ HEALTH</div>
                </div>
                <div
                    className={styles.dashboardChild}
                    onClick={onRectangleClick}
                />
                <div
                    className={styles.dashboardItem}
                    onClick={onRectangle1Click}
                />
                <div
                    className={styles.dashboardInner}
                    onClick={onRectangle2Click}
                />
                <div
                    className={styles.rectangleDiv}
                    onClick={onRectangle3Click}
                />
                <div
                    className={styles.dashboardChild1}
                    onClick={onRectangle4Click}
                />
                <div
                    className={styles.dashboardChild2}
                    onClick={onRectangle5Click}
                />
                <div
                    className={styles.dashboardChild3}
                    onClick={onRectangle6Click}
                />
                <img className={styles.groupIcon} alt="" src={GroupIcon} />
                <div className={styles.services}>Services</div>
                <div
                    className={styles.healthScreening}
                >{`Health & Screening`}</div>
                <img
                    className={styles.headphones1Icon}
                    alt=""
                    src={HeadPhones}
                />
                <img
                    className={styles.cardiogram1Icon}
                    alt=""
                    src={Cardiogram}
                />
                <div className={styles.itRoomMonitorContainer}>
                    <p className={styles.itRoom}>IT Room</p>
                    <p className={styles.itRoom}>Monitor</p>
                </div>
                <div className={styles.itPrintingRoomContainer}>
                    <p className={styles.itRoom}>IT Printing</p>
                    <p className={styles.itRoom}>Room</p>
                </div>
                <div className={styles.staffsManagement}>
                    <p className={styles.itRoom}>Staffs</p>
                    <p className={styles.itRoom}>Management</p>
                </div>
                <div className={styles.mulReport}>MUL Report</div>
                <div className={styles.roomManagement}>
                    <p className={styles.itRoom}>Room</p>
                    <p className={styles.itRoom}>Management</p>
                </div>
                <div className={styles.finalReport}>Final Report</div>
                <div className={styles.wordBank}>Word Bank</div>
                <div
                    className={styles.rectangleParent}
                    onClick={onGroupContainer1Click}
                >
                    <div className={styles.groupChild} />
                    <img
                        className={styles.iconAlternatePhone}
                        alt=""
                        src={PhoneIcon}
                    />
                    <div className={styles.phoneConsultation}>
                        <p className={styles.itRoom}>Phone</p>
                        <p className={styles.itRoom}>Consultation</p>
                    </div>
                </div>
                <div
                    className={styles.dashboardChild4}
                    onClick={openCheckInLabTest2}
                />
                <div className={styles.labTest}>Lab Test</div>
                <img className={styles.swab1Icon} alt="" src={Swab} />
                <div
                    className={styles.dashboardChild5}
                    onClick={onRectangle9Click}
                />
                <div className={styles.dining}>Dining</div>
                <img className={styles.hotFood12} alt="" src={HotFood} />
                <div
                    className={styles.dashboardChild6}
                    onClick={onRectangle10Click}
                />
                <div className={styles.selfKioskUi}>Self-Kiosk UI</div>
                <div
                    className={styles.dashboardChild7}
                    onClick={onRectangle11Click}
                />
                <div className={styles.queueManagement}>
                    <p className={styles.itRoom}>Queue</p>
                    <p className={styles.itRoom}>Management</p>
                </div>
                <img className={styles.line1Icon} alt="" src={LineIcon} />
                <div
                    className={styles.dashboardChild8}
                    onClick={onRectangle12Click}
                />
                <div className={styles.monitorSystem}>Monitor System</div>
                <img className={styles.list1Icon} alt="" src={LineIcon} />
                <div
                    className={styles.dashboardChild9}
                    onClick={onRectangle13Click}
                />
                <div className={styles.receptionCounter}>
                    <p className={styles.itRoom}>Reception</p>
                    <p className={styles.itRoom}>Counter</p>
                </div>
                <div className={styles.healthcare11}>
                    <div className={styles.group}>
                        <div className={styles.group1}>
                            <img
                                className={styles.groupIcon1}
                                alt=""
                                src={Group2}
                            />
                            <img
                                className={styles.vectorIcon}
                                alt=""
                                src={Vector2}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={styles.dashboardChild10}
                    onClick={openConsultationCheckIn}
                />
                <div className={styles.consultation1}>Consultation</div>
                <img className={styles.chat11} alt="" src={Chat1} />
                <div
                    className={styles.dashboardChild11}
                    onClick={openCheckInScreeningRoom1}
                />
                <div className={styles.screeningRoomSystemContainer}>
                    <p className={styles.itRoom}>Screening Room</p>
                    <p className={styles.itRoom}>System</p>
                </div>
                <img className={styles.frameIcon} alt="" src={Frame2} />
                <img className={styles.monitor1Icon} alt="" src={Monitor} />
                <img className={styles.printer11} alt="" src={Printer} />
                <img className={styles.group1Icon} alt="" src={Group1} />
                <img
                    className={styles.handTouchingTabletScreen1Icon}
                    alt=""
                    src={HandTouch}
                />
                <div className={styles.otherFunctionParent}>
                    <div className={styles.otherFunction}>Other Function</div>
                    <img className={styles.other2Icon} alt="" src={Other2} />
                </div>
                <div
                    className={styles.dashboardChild12}
                    onClick={onRectangle16Click}
                />
                <div className={styles.printSticker}>Print Sticker</div>
                <img className={styles.file1Icon} alt="" src={File1} />
                <div className={styles.frame} />
                <img className={styles.subtractIcon} alt="" src={RoomIcon} />
                <img className={styles.vectorIcon1} alt="" src={Vector2} />
                <img className={styles.iconReport} alt="" src={MulIcon} />
                <div className={styles.groupDiv}>
                    <div
                        className={styles.groupChild1}
                        onClick={onRectangle20Click}
                    />
                    <div className={styles.radiologyReporting}>
                        <p className={styles.itRoom}>Radiology</p>
                        <p className={styles.itRoom}>Reporting</p>
                    </div>
                    <img
                        className={styles.iconAlternatePhone}
                        alt=""
                        src={Group2}
                    />
                </div>
            </div>
            {isCheckInLabTest2Open && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeCheckInLabTest2}
                >
                    <CheckInLabTest2 />
                </PortalPopup>
            )}
            {isConsultationCheckInOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeConsultationCheckIn}
                >
                    <ConsultationCheckIn />
                </PortalPopup>
            )}
            {isCheckInScreeningRoom1Open && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement="Centered"
                    onOutsideClick={closeCheckInScreeningRoom1}
                >
                    <CheckInScreeningRoom1 />
                </PortalPopup>
            )}
        </>
    )
}

export default Dashboard
