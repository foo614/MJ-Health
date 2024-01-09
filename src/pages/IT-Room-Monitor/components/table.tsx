import { BadgeProps } from '@mui/base/Badge'
import { Badge, Button, Grid, styled } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from '../_it-room-monitor.module.scss'

const mockData = [
    {
        roomNo: 'A-01',
        roomName: 'Interview Room 1',
        doctor: 'Lee Shen Long',
        nurse: '-',
        checkInAt: '13:00',
        status: 0,
    },
    {
        roomNo: 'A-01',
        roomName: 'Interview Room 1',
        doctor: 'Lee Shen Long',
        nurse: '-',
        checkInAt: '13:00',
        status: 1,
    },
    {
        roomNo: 'A-01',
        roomName: 'Interview Room 1',
        doctor: 'Lee Shen Long',
        nurse: '-',
        checkInAt: '13:00',
        status: 0,
    },
    {
        roomNo: 'A-01',
        roomName: 'Interview Room 1',
        doctor: 'Lee Shen Long',
        nurse: '-',
        checkInAt: '13:00',
        status: 1,
    },
    {
        roomNo: 'A-01',
        roomName: 'Interview Room 1',
        doctor: 'Lee Shen Long',
        nurse: '-',
        checkInAt: '13:00',
        status: 0,
    },
    {
        roomNo: 'A-01',
        roomName: 'Interview Room 1',
        doctor: 'Lee Shen Long',
        nurse: '-',
        checkInAt: '13:00',
        status: 1,
    },
    {
        roomNo: 'A-01',
        roomName: 'Interview Room 1',
        doctor: 'Lee Shen Long',
        nurse: '-',
        checkInAt: '13:00',
        status: 0,
    },
    {
        roomNo: 'A-01',
        roomName: 'Interview Room 1',
        doctor: 'Lee Shen Long',
        nurse: '-',
        checkInAt: '13:00',
        status: 1,
    },
]

function CustomTable() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const StyledActiveBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: matches ? -18 : -10,
            top: 12,
            border: `5px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            backgroundColor: '#3ADEBB',
        },
    }))
    const StyledInactiveBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: matches ? -18 : -10,
            top: 12,
            border: `5px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            backgroundColor: '#DDDDDD',
        },
    }))
    return (
        <div className={styles.monitorSystemDiv}>
            <Grid container columnSpacing={2}>
                <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                    <Button
                        variant="contained"
                        fullWidth
                        className={
                            matches
                                ? styles.selectedBttn
                                : styles.selectedBttnMobile
                        }
                        size="small"
                    >
                        Front Area
                    </Button>
                </Grid>
                <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                    <Button
                        variant="contained"
                        fullWidth
                        className={
                            matches
                                ? styles.unselectedBttn
                                : styles.unselectedBttnMobile
                        }
                        size="small"
                    >
                        Area 1
                    </Button>
                </Grid>
                <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                    <Button
                        variant="contained"
                        fullWidth
                        className={
                            matches
                                ? styles.unselectedBttn
                                : styles.unselectedBttnMobile
                        }
                        size="small"
                    >
                        Area 2
                    </Button>
                </Grid>
                <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                    <Button
                        variant="contained"
                        fullWidth
                        className={
                            matches
                                ? styles.unselectedBttn
                                : styles.unselectedBttnMobile
                        }
                        size="small"
                    >
                        Dining Area
                    </Button>
                </Grid>
                <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                    <Button
                        variant="contained"
                        fullWidth
                        className={
                            matches
                                ? styles.unselectedBttn
                                : styles.unselectedBttnMobile
                        }
                        size="small"
                    >
                        Physician Consultation Zone
                    </Button>
                </Grid>
                <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                    <Button
                        variant="contained"
                        fullWidth
                        className={
                            matches
                                ? styles.unselectedBttn
                                : styles.unselectedBttnMobile
                        }
                        size="small"
                    >
                        Life Style Consulting Area
                    </Button>
                </Grid>
            </Grid>
            <div style={{ marginTop: '1rem' }}>
                <TableContainer
                    component={Paper}
                    className={styles.monitorSystemTableTop}
                >
                    <Table>
                        <TableHead className={styles.monitorSystemTableHead}>
                            <TableRow>
                                <TableCell>
                                    <p
                                        className={
                                            styles.monitorSystemTableHeadTitle
                                        }
                                        style={{ textAlign: 'center' }}
                                    >
                                        Room No.
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={
                                            styles.monitorSystemTableHeadTitle
                                        }
                                    >
                                        Room Name
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={
                                            styles.monitorSystemTableHeadTitle
                                        }
                                    >
                                        Doctor
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={
                                            styles.monitorSystemTableHeadTitle
                                        }
                                    >
                                        Nurse
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={
                                            styles.monitorSystemTableHeadTitle
                                        }
                                        style={{ textAlign: 'center' }}
                                    >
                                        Check In At
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={
                                            styles.monitorSystemTableHeadTitle
                                        }
                                        style={{ textAlign: 'center' }}
                                    >
                                        Status
                                    </p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mockData.map((item: any, index: number) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellValue
                                                }
                                            >
                                                {item.roomNo}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellBoldValue
                                                }
                                            >
                                                {item.roomName}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellBoldValue
                                                }
                                            >
                                                {item.doctor}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellBoldValue
                                                }
                                            >
                                                {item.nurse}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellBoldValue
                                                }
                                                style={{
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    disableRipple
                                                >
                                                    {item.checkInAt}
                                                </Button>
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            {item.status === 0 ? (
                                                <StyledActiveBadge
                                                    badgeContent={''}
                                                >
                                                    <p
                                                        className={
                                                            styles.tableCellValueLast
                                                        }
                                                    >
                                                        Active
                                                    </p>
                                                </StyledActiveBadge>
                                            ) : (
                                                <StyledInactiveBadge
                                                    badgeContent={''}
                                                >
                                                    <p
                                                        className={
                                                            styles.tableCellValueLast
                                                        }
                                                    >
                                                        Off
                                                    </p>
                                                </StyledInactiveBadge>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default CustomTable
