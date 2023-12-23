import styles from './_lab.module.scss'
import Button from '@mui/material/Button'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { LAB_TEST_PAGE } from 'constant'
import { Grid } from '@mui/material'
// import Container from '@mui/material/Container'
import { useState } from 'react'
import Hematology from './components/hematology'
import Immunology from './components/immunology'
import Biochemistry from './components/biochemistry'
import UrineFaeces from './components/urine-faeces'
import MPA from './components/mpa'
import OptionalItems from './components/optional-items'

const LabInfo = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()
    const [value, setValue] = useState(1)

    const handleMenuChange = (menuId: number) => {
        setValue(menuId)
    }

    const handleShowMenuPage = (menuId: number) => {
        switch (menuId) {
            case 1:
                return <Hematology />
            case 2:
                return <Immunology />
            case 3:
                return <Biochemistry />
            case 4:
                return <UrineFaeces />
            case 5:
                return <MPA />
            case 6:
                return <OptionalItems />
            default:
                return null
        }
    }

    return (
        <section className={styles.labTestSingleItemSection}>
            <div className={styles.labTestTitleDiv}>
                <Grid container>
                    <Grid item md={2} xs={12}>
                        <Button
                            variant="text"
                            className={
                                matches
                                    ? styles.labTestBackButton
                                    : styles.labTestBackButtonMobile
                            }
                            startIcon={
                                <ChevronLeftIcon className={styles.backIcon} />
                            }
                            onClick={() => navigate(LAB_TEST_PAGE)}
                        >
                            BACK
                        </Button>
                    </Grid>
                    <Grid item md={8}>
                        <Grid container spacing={2} style={{ padding: '5px' }}>
                            <Grid item md={2} xs={12}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    className={
                                        value === 1
                                            ? styles.labTestInfoMenuSelected
                                            : styles.labTestInfoMenu
                                    }
                                    onClick={() => handleMenuChange(1)}
                                >
                                    Hematology
                                </Button>
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    className={
                                        value === 2
                                            ? styles.labTestInfoMenuSelected
                                            : styles.labTestInfoMenu
                                    }
                                    onClick={() => handleMenuChange(2)}
                                >
                                    Immunology
                                </Button>
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    className={
                                        value === 3
                                            ? styles.labTestInfoMenuSelected
                                            : styles.labTestInfoMenu
                                    }
                                    onClick={() => handleMenuChange(3)}
                                >
                                    Biochemistry
                                </Button>
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    className={
                                        value === 4
                                            ? styles.labTestInfoMenuSelected
                                            : styles.labTestInfoMenu
                                    }
                                    onClick={() => handleMenuChange(4)}
                                >
                                    Urine & Faeces
                                </Button>
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    className={
                                        value === 5
                                            ? styles.labTestInfoMenuSelected
                                            : styles.labTestInfoMenu
                                    }
                                    onClick={() => handleMenuChange(5)}
                                >
                                    MPA
                                </Button>
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    className={
                                        value === 6
                                            ? styles.labTestInfoMenuSelected
                                            : styles.labTestInfoMenu
                                    }
                                    onClick={() => handleMenuChange(6)}
                                >
                                    Optional Items
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={2} xs={12}></Grid>
                </Grid>
            </div>
            <Grid container style={{ padding: '5px' }}>
                <Grid item md={2} xs={12}></Grid>
                <Grid item md={8} xs={12}>
                    {handleShowMenuPage(value)}
                </Grid>
                <Grid item md={2} xs={12}></Grid>
            </Grid>
        </section>
    )
}

export default LabInfo
