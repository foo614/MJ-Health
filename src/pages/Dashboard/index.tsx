import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import ResponsiveAppBar from 'components/AppBar'
import Footer from 'components/Footer'
import { FunctionComponent } from 'react'
import HealthAndScreening from './components/HealthAndScreening'
import OtherFunction from './components/OtherFunction'
import Services from './components/Services'

const Dashboard: FunctionComponent = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <ResponsiveAppBar />
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="xl">
                    <Grid container>
                        <Grid xs>
                            <Services />
                            <HealthAndScreening />
                            <OtherFunction />
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </Box>
        </>
    )
}

export default Dashboard
