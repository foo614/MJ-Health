import {
    Box,
    Button,
    Container,
    Grid,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import { useState } from 'react'
import styles from './_phone-consultation.module.scss'
import HmcCallOutDistribution from './components/call-out-distribution/hmc-call-out-distribution'
import MedicalCallOutDistribution from './components/call-out-distribution/medical-call-out-distribution'
import CallOutRecords from './components/call-out-records'

const PhoneConsultation = () => {
    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    const tabPages = [
        {
            tabName: 'hmcCallOutDistribution',
            label: 'HMC Call Out Distribution',
        },
        {
            tabName: 'medicalCallOutDistribution',
            label: 'Medical Call Out Distribution',
        },
        {
            tabName: 'callOutRecords',
            label: 'Call Out Records',
        },
        {
            tabName: 'reportsAndStatistics',
            label: 'Reports & Statistics',
            status: false,
        },
    ]
    const [tabPage, setTabPage] = useState<string>(tabPages[0].tabName)

    return (
        <>
            <ResponsiveAppBar />

            <CustomHeader title="PHONE CONSULTATION" />

            <Container
                maxWidth="xl"
                style={{ marginTop: matches ? '2rem' : '1rem' }}
            >
                <Grid container spacing={2}>
                    {tabPages.map((t) => (
                        <Grid key={t.tabName} item xs={12} sm={6} md={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={() => {
                                    t.status !== false && setTabPage(t.tabName)
                                }}
                                className={`${styles.tabButton} ${
                                    tabPage == t.tabName ? styles.active : ''
                                }`}
                            >
                                {t.label}
                            </Button>
                        </Grid>
                    ))}
                </Grid>

                <Box style={{ marginTop: matches ? '2rem' : '1rem' }}>
                    {tabPage == 'hmcCallOutDistribution' && (
                        <HmcCallOutDistribution />
                    )}

                    {tabPage == 'medicalCallOutDistribution' && (
                        <MedicalCallOutDistribution />
                    )}

                    {tabPage == 'callOutRecords' && <CallOutRecords />}
                </Box>
            </Container>
        </>
    )
}

export default PhoneConsultation
