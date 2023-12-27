import Card from '@mui/material/Card'
import styles from './_urine-faeces.module.scss'
import { Grid } from '@mui/material'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import UrineFaecesData from './components/urine-faeces-data'
import UrineFaecesStatusComponent from './components/urine-faeces-status-component'
import Button from '@mui/material/Button'
import StaffEditModal from '../staffEditModal'
const UrineFaeces = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [editMode, setEditMode] = useState(true)
    const [staffOpenModal, setStaffOpenModal] = useState(false)

    return (
        <>
            <Card className={styles.card}>
                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <div
                            style={
                                matches
                                    ? {}
                                    : { maxWidth: '400px', overflow: 'auto' }
                            }
                        >
                            <UrineFaecesData
                                editMode={editMode}
                                matches={matches}
                            />
                        </div>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Grid container spacing={3}>
                            <Grid item md={3} xs={12}>
                                <p className={styles.dataTitleForStatus}>
                                    Urine
                                </p>
                            </Grid>
                            <Grid item md={9} xs={12}>
                                <div className={styles.flexCell}>
                                    <div>
                                        <UrineFaecesStatusComponent
                                            status={1}
                                            text="Not Done"
                                        />
                                    </div>
                                    <div>
                                        <UrineFaecesStatusComponent
                                            status={2}
                                            text="Done"
                                        />
                                    </div>
                                    <div>
                                        <UrineFaecesStatusComponent
                                            status={2}
                                            text="MC"
                                        />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Grid container spacing={3}>
                            <Grid item md={3} xs={12}>
                                <p className={styles.dataTitleForStatus}>
                                    Stool
                                </p>
                            </Grid>
                            <Grid item md={9} xs={12}>
                                <div className={styles.flexCell}>
                                    <div>
                                        <UrineFaecesStatusComponent
                                            status={1}
                                            text="Not Done"
                                        />
                                    </div>
                                    <div>
                                        <UrineFaecesStatusComponent
                                            status={2}
                                            text="Done"
                                        />
                                    </div>
                                    <div>
                                        <UrineFaecesStatusComponent
                                            status={2}
                                            text="IS (Insufficient Sample)"
                                        />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
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

export default UrineFaeces
