import { Button, Grid, Stack } from '@mui/material'
import ResponsiveAppBar from 'components/AppBar'
import { useState } from 'react'
import styles from './_room-management.module.scss'
import RoomManagementTable from './components/table'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ManageAreaModal from './components/manage-area-modal'

const RoomManagement = () => {
    const [openManageAreaModal, setOpenManageAreaModal] =
        useState<boolean>(false)
    const [currentEditItem, setCurrentEditItem] = useState<number>(0)
    const theme = useTheme()
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    const smUp = useMediaQuery(theme.breakpoints.up('sm'))
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <>
            <ResponsiveAppBar />
            <div
                className={styles.header}
                style={
                    lgUp ? { paddingLeft: '3rem', paddingRight: '3rem' } : {}
                }
            >
                {lgUp ? (
                    <>
                        <div className={styles.header_right_content}>
                            <Button
                                variant="contained"
                                size="small"
                                className={
                                    currentEditItem === 0
                                        ? styles.manage_area_button_active
                                        : styles.manage_area_button_inactive
                                }
                                disabled={currentEditItem === 0 ? false : true}
                                onClick={() => setOpenManageAreaModal(true)}
                            >
                                Manage Area
                            </Button>
                        </div>
                        <div>
                            <p className={styles.headerTitle}>
                                ROOM MANAGEMENT
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <p className={styles.headerTitle}>
                                ROOM MANAGEMENT
                            </p>
                            <div style={{ textAlign: 'center' }}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    className={
                                        currentEditItem === 0
                                            ? styles.manage_area_button_active
                                            : styles.manage_area_button_inactive
                                    }
                                    disabled={
                                        currentEditItem === 0 ? false : true
                                    }
                                    onClick={() => setOpenManageAreaModal(true)}
                                >
                                    Manage Area
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Grid container spacing={2}>
                <Grid
                    item
                    md={4}
                    sm={12}
                    xs={12}
                    sx={{ backgroundColor: '#fff' }}
                >
                    <div
                        className={styles.buttonOuterDiv}
                        style={{
                            paddingLeft: mdUp ? '30px' : '15px',
                            paddingRight: mdUp ? '30px' : '15px',
                        }}
                    >
                        <div className={styles.buttonDiv}>
                            <Stack
                                direction="column"
                                alignItems="center"
                                spacing={3}
                            >
                                <Button
                                    variant="contained"
                                    className={styles.leftSideBttn}
                                >
                                    Front Area
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.leftSideBttn}
                                >
                                    Area 1
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.leftSideBttn}
                                >
                                    Area 2
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.leftSideBttn}
                                >
                                    Dining Area
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.leftSideBttn}
                                >
                                    Physcian Consultation Area
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.leftSideBttn}
                                >
                                    Life Style Consulting Area
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.leftSideBttn}
                                >
                                    Sample
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </Grid>
                <Grid item md={8} sm={12} xs={12}>
                    <div style={{ padding: '20px', height: '100vh' }}>
                        <RoomManagementTable
                            currentEditItem={currentEditItem}
                            setCurrentEditItem={setCurrentEditItem}
                        />
                    </div>
                </Grid>
            </Grid>
            {openManageAreaModal ? (
                <ManageAreaModal
                    open={openManageAreaModal}
                    setOpen={setOpenManageAreaModal}
                    matches={smUp}
                />
            ) : null}
        </>
    )
}

export default RoomManagement
