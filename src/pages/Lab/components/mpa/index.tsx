import Card from '@mui/material/Card'
import styles from './_mpa.module.scss'
import { Grid, TextField } from '@mui/material'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MPADataLeft from './components/mpa-data-left'
import MPADataRight from './components/mpa-data-right'
import Button from '@mui/material/Button'
import StaffEditModal from '../staffEditModal'
import MPAStatusComponent from './components/mpa-status-component'
const MPA = () => {
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
                            <MPADataLeft
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
                            <MPADataRight
                                editMode={editMode}
                                matches={matches}
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={12}>
                        <p className={styles.dataTitleForStatus}>Menopause</p>
                    </Grid>
                    <Grid item md={9} xs={12}>
                        <div className={styles.flexCell}>
                            <div>
                                <MPAStatusComponent status={1} text="No" />
                            </div>
                            <div>
                                <MPAStatusComponent status={2} text="Yes" />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={12}>
                        <div style={{ marginTop: '18px' }}>
                            <p className={styles.dataTitleForStatus}>
                                Last Monthly Period
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <div className={styles.flexCellLastMonthlyPeriod}>
                            <div>
                                <TextField
                                    size="small"
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div style={{ margin: 'auto' }}>
                                <p className={styles.dash}>-</p>
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div style={{ margin: 'auto' }}>
                                <p className={styles.dash}>-</p>
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={12}>
                        <div style={{ marginTop: '18px' }}>
                            <p className={styles.bottomTitle}>
                                Last Screening Date
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div style={{ paddingLeft: '5px' }}>
                            <TextField
                                size="small"
                                margin="dense"
                                disabled={editMode ? false : true}
                                InputProps={{
                                    className: styles.textFieldProps,
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={12}>
                        <div style={{ marginTop: '18px' }}>
                            <p className={styles.bottomTitle}>
                                Previous Screening Date
                            </p>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div style={{ paddingLeft: '5px' }}>
                            <TextField
                                size="small"
                                margin="dense"
                                disabled={editMode ? false : true}
                                InputProps={{
                                    className: styles.textFieldProps,
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={12} style={{ margin: 'auto' }}>
                        <p className={styles.dataTitleForStatus}>MUL</p>
                    </Grid>
                    <Grid item md={9} xs={12}>
                        <Grid container>
                            <Grid item md={2} xs={12}>
                                <div style={{ marginTop: '8px' }}>
                                    <MPAStatusComponent
                                        status={1}
                                        text="No Taken"
                                    />
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <div
                                    className={styles.flexCellLastMonthlyPeriod}
                                >
                                    <div style={{ marginTop: '8px' }}>
                                        <MPAStatusComponent
                                            status={2}
                                            text="Taken"
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            size="small"
                                            margin="dense"
                                            disabled={editMode ? false : true}
                                            InputProps={{
                                                className:
                                                    styles.textFieldProps,
                                            }}
                                        />
                                    </div>
                                    <div style={{ margin: 'auto' }}>
                                        <p className={styles.dash}>-</p>
                                    </div>
                                    <div>
                                        <TextField
                                            size="small"
                                            margin="dense"
                                            disabled={editMode ? false : true}
                                            InputProps={{
                                                className:
                                                    styles.textFieldProps,
                                            }}
                                        />
                                    </div>
                                    <div style={{ margin: 'auto' }}>
                                        <p className={styles.dash}>-</p>
                                    </div>
                                    <div>
                                        <TextField
                                            size="small"
                                            margin="dense"
                                            disabled={editMode ? false : true}
                                            InputProps={{
                                                className:
                                                    styles.textFieldProps,
                                            }}
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

export default MPA
