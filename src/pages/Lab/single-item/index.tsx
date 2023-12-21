import styles from '../_lab.module.scss'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Button from '@mui/material/Button'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useNavigate } from 'react-router-dom'
import { LAB_TEST_PAGE } from 'constant'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material'
import Label from './components/label'

const SingleItem = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()

    const fakeData = [
        {
            id: 1,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 2,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 3,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 4,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 5,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 6,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 7,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 8,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 9,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 10,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 11,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
        {
            id: 12,
            name: 'Total Anti HAV',
            number: '11',
        },
    ]
    return (
        <>
            <section className={styles.labTestSingleItemSection}>
                <div className={styles.labTestTitleDiv}>
                    <div
                        className={
                            matches
                                ? styles.labTestTitleButtonDiv
                                : styles.labTestTitleButtonDivMobile
                        }
                    >
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
                    </div>
                    <div className={styles.labTestTitle}>
                        <p>SINGLE ITEMS</p>
                    </div>
                </div>
                <Container maxWidth="xl">
                    <div className={styles.singleItemDiv}>
                        <Grid container spacing={3}>
                            <Grid
                                item
                                md={6}
                                style={
                                    matches
                                        ? { height: '750px' }
                                        : { marginBottom: '3rem' }
                                }
                            >
                                <p className={styles.singleItemTitle}>
                                    Immunology
                                </p>
                                <div
                                    className={styles.itemDiv}
                                    style={{ height: '100%' }}
                                >
                                    <Grid
                                        container
                                        columnSpacing={4}
                                        rowSpacing={2}
                                        className={styles.itemMainGridContainer}
                                    >
                                        {fakeData.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <Grid
                                                        item
                                                        md={6}
                                                        key={index}
                                                    >
                                                        <Label />
                                                    </Grid>
                                                )
                                            }
                                        )}
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item md={6} style={{ height: '750px' }}>
                                <Grid
                                    container
                                    style={{ height: '100%' }}
                                    columnSpacing={3}
                                >
                                    <Grid
                                        item
                                        md={6}
                                        style={{ marginBottom: '3rem' }}
                                    >
                                        <div style={{ height: '100%' }}>
                                            <p
                                                className={
                                                    styles.singleItemTitle
                                                }
                                            >
                                                Biochemistry
                                            </p>
                                            <div
                                                className={styles.itemDiv}
                                                style={{ height: '100%' }}
                                            >
                                                <Grid
                                                    container
                                                    columnSpacing={4}
                                                    rowSpacing={2}
                                                    className={
                                                        styles.singleItemMainGridContainer
                                                    }
                                                >
                                                    {fakeData.map(
                                                        (
                                                            item: any,
                                                            index: number
                                                        ) => {
                                                            return (
                                                                <Grid
                                                                    item
                                                                    md={12}
                                                                    key={index}
                                                                >
                                                                    <Label />
                                                                </Grid>
                                                            )
                                                        }
                                                    )}
                                                </Grid>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        style={{ marginBottom: '3rem' }}
                                    >
                                        <p className={styles.singleItemTitle}>
                                            Blood Test
                                        </p>
                                        <div
                                            className={styles.itemDiv}
                                            style={{ height: '100%' }}
                                        >
                                            <Grid
                                                container
                                                columnSpacing={4}
                                                rowSpacing={2}
                                                className={
                                                    styles.singleItemMainGridContainer
                                                }
                                            >
                                                {fakeData.map(
                                                    (
                                                        item: any,
                                                        index: number
                                                    ) => {
                                                        return (
                                                            <Grid
                                                                item
                                                                md={12}
                                                                key={index}
                                                            >
                                                                <Label />
                                                            </Grid>
                                                        )
                                                    }
                                                )}
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        style={
                                            matches
                                                ? {}
                                                : { marginBottom: '3rem' }
                                        }
                                    >
                                        <p className={styles.singleItemTitle}>
                                            Urine Feaces
                                        </p>
                                        <div
                                            className={styles.itemDiv}
                                            style={{ height: '100%' }}
                                        >
                                            <Grid
                                                container
                                                columnSpacing={4}
                                                rowSpacing={2}
                                                className={
                                                    styles.singleItemMainGridContainer
                                                }
                                            >
                                                {fakeData.map(
                                                    (
                                                        item: any,
                                                        index: number
                                                    ) => {
                                                        return (
                                                            <Grid
                                                                item
                                                                md={12}
                                                                key={index}
                                                            >
                                                                <Label />
                                                            </Grid>
                                                        )
                                                    }
                                                )}
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Grid item md={6}>
                                        <p className={styles.singleItemTitle}>
                                            Other Items
                                        </p>
                                        <div
                                            className={styles.itemDiv}
                                            style={{ height: '100%' }}
                                        >
                                            <Grid
                                                container
                                                columnSpacing={4}
                                                rowSpacing={2}
                                                className={
                                                    styles.singleItemMainGridContainer
                                                }
                                            >
                                                {fakeData.map(
                                                    (
                                                        item: any,
                                                        index: number
                                                    ) => {
                                                        return (
                                                            <Grid
                                                                item
                                                                md={12}
                                                                key={index}
                                                            >
                                                                <Label />
                                                            </Grid>
                                                        )
                                                    }
                                                )}
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default SingleItem
