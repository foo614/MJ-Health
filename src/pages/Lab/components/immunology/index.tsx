import Card from '@mui/material/Card'
import styles from './_immunology.module.scss'
import ImmunologyDataLeft from './components/immunology-data-left'
import { Grid } from '@mui/material'
import ImmunologyDataRight from './components/immunology-data-right'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import Button from '@mui/material/Button'
import StaffEditModal from '../staffEditModal'
const Immunology = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [editMode, setEditMode] = useState(true)
    const [staffOpenModal, setStaffOpenModal] = useState(false)
    return (
        <>
            <Card className={styles.card}>
                <Grid container spacing={1}>
                    <Grid item md={6} xs={12}>
                        <div
                            style={
                                matches
                                    ? {}
                                    : { maxWidth: '400px', overflow: 'auto' }
                            }
                        >
                            <ImmunologyDataLeft
                                editMode={editMode}
                                matches={matches}
                            />
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div
                            style={
                                matches
                                    ? {}
                                    : { maxWidth: '400px', overflow: 'auto' }
                            }
                        >
                            <ImmunologyDataRight
                                editMode={editMode}
                                matches={matches}
                            />
                        </div>
                    </Grid>
                </Grid>
                <div
                    style={{
                        marginLeft: '1rem',
                        marginRight: '1rem',
                        padding: '14px',
                        marginTop: '1rem',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item md={5} xs={12}>
                            <Grid container spacing={1}>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        fullWidth
                                        className={styles.nextForwardBttn}
                                    >
                                        Next
                                    </Button>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        fullWidth
                                        className={styles.nextForwardBttn}
                                    >
                                        Forward
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={2}></Grid>
                        <Grid item md={5} xs={12}>
                            <Grid container spacing={1}>
                                <Grid item md={6} xs={12}>
                                    {editMode ? (
                                        <Button
                                            size="small"
                                            variant="contained"
                                            fullWidth
                                            className={styles.saveBttn}
                                        >
                                            Save
                                        </Button>
                                    ) : (
                                        <Button
                                            size="small"
                                            variant="contained"
                                            fullWidth
                                            className={styles.editBttn}
                                            onClick={() =>
                                                setStaffOpenModal(true)
                                            }
                                        >
                                            Edit
                                        </Button>
                                    )}
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        fullWidth
                                        className={styles.confirmBttn}
                                        classes={{
                                            disabled:
                                                styles.confirmBttnDisabled,
                                        }}
                                        disabled={editMode ? false : true}
                                        onClick={() => setEditMode(false)}
                                    >
                                        Confirm
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                {staffOpenModal ? (
                    <StaffEditModal
                        open={staffOpenModal}
                        setOpen={setStaffOpenModal}
                        setEditMode={setEditMode}
                    />
                ) : null}
            </Card>
        </>
    )
}

export default Immunology
