import { Button, Card, Container, Grid } from '@mui/material'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import { DINING_PAGE } from 'constant'
import { useState } from 'react'
import styles from './_meal-setup.module.scss'
import MealSetupEditTable from './components/meal-setup-edit-table'
import MealSetupTable from './components/meal-setup-table'
const MealSetup = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [editMode, setEditMode] = useState<boolean>(false)
    const [openAddNewModal, setOpenAddNewModal] = useState<boolean>(false)
    const fakeData = [
        {
            id: 1,
            name: 'Multigrain Rice',
            weight: 1,
            calories: 1.56,
        },
        {
            id: 2,
            name: 'Mushroom Soy Knot',
            weight: 1,
            calories: 1.27,
        },
        {
            id: 3,
            name: 'Chinese Cabbage Tofu',
            weight: 1,
            calories: 0.67,
        },
        {
            id: 4,
            name: 'Stearmed Pork Choy',
            weight: 1,
            calories: 0.29,
        },
        {
            id: 5,
            name: 'Old Cucumber Soup',
            weight: 1,
            calories: 0.6,
        },
        {
            id: 6,
            name: 'Melon',
            weight: 1,
            calories: 0.33,
        },
    ]
    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader to={DINING_PAGE} title="MEAL SETUP" />
            <Container maxWidth="lg" style={{ marginTop: '1rem' }}>
                <Card className={styles.card}>
                    <Grid container spacing={2}>
                        <Grid item md={3} xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                className={styles.vegetarianBttn}
                                sx={{ height: '50px' }}
                            >
                                Vegetarian
                            </Button>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                className={styles.nonVegetarianBttn}
                                sx={{ height: '50px' }}
                            >
                                Non-Vegetarian
                            </Button>
                        </Grid>
                    </Grid>
                    <div className={styles.divider} />
                    <Card className={styles.innerCard}>
                        {editMode ? (
                            <MealSetupEditTable
                                fakeData={fakeData}
                                matches={matches}
                                editMode={editMode}
                                openAddNewModal={openAddNewModal}
                                setOpenAddNewModal={setOpenAddNewModal}
                            />
                        ) : (
                            <MealSetupTable
                                fakeData={fakeData}
                                matches={matches}
                                editMode={editMode}
                            />
                        )}
                    </Card>
                    {editMode ? (
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ justifyContent: 'end', marginTop: '1rem' }}
                        >
                            <Button
                                variant="contained"
                                className={styles.cancelBttn}
                                sx={
                                    matches
                                        ? { width: '220px' }
                                        : { width: 'auto' }
                                }
                                onClick={() => setEditMode(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                className={styles.saveBttn}
                                sx={
                                    matches
                                        ? { width: '220px' }
                                        : { width: 'auto' }
                                }
                                onClick={() => setEditMode(false)}
                            >
                                Save
                            </Button>
                        </Stack>
                    ) : (
                        <div style={{ textAlign: 'end' }}>
                            <Button
                                variant="contained"
                                className={styles.editBttn}
                                sx={
                                    matches
                                        ? { width: '220px' }
                                        : { width: 'auto' }
                                }
                                onClick={() => setEditMode(true)}
                            >
                                Edit
                            </Button>
                        </div>
                    )}
                </Card>
            </Container>
        </>
    )
}

export default MealSetup
