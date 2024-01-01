import Grid from '@mui/material/Grid'
import ResponsiveAppBar from 'components/AppBar.tsx'
import { FunctionComponent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HealthAndScreening from './components/HealthAndScreening'
import OtherFunction from './components/OtherFunction'
import Services from './components/Services'

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
            <Grid sx={{ p: 6 }}>
                <Services />
                <HealthAndScreening />
                <OtherFunction />
            </Grid>
        </>
    )
}

export default Dashboard
