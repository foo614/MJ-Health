import { BadgeProps } from '@mui/base/Badge'
import { Badge, Button, useMediaQuery, useTheme } from '@mui/material'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import { QUEUE_MANAGEMENT_PAGE } from 'constant'
import { useNavigate } from 'react-router-dom'
import styles from './_queue-management.module.scss'

const mockData = [
    {
        roomNo: 'A-01',
        roomName: 'ENT Examination',
        status: 0,
    },
    {
        roomNo: 'A-02',
        roomName: 'Lung Function',
        status: 1,
    },
    {
        roomNo: 'A-03',
        roomName: 'MUL',
        status: 0,
    },
    {
        roomNo: 'A-04',
        roomName: 'ENT Mammo',
        status: 0,
    },
    {
        roomNo: 'A-05',
        roomName: 'BMD',
        status: 1,
    },
    {
        roomNo: 'A-06',
        roomName: 'Audiometry',
        status: 1,
    },
    {
        roomNo: 'A-07',
        roomName: 'Bone DEXA Scan',
        status: 0,
    },
]

function QueueManagement() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()

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
        <>
            <ResponsiveAppBar />
            <CustomHeader title="QUEUE MANAGEMENT" to={''} />
            <Grid
                container
                className={styles.container}
                spacing={matches ? 5 : 0}
            >
                <Grid xs={12} md={6}>
                    <div className={styles.leftBox}>
                        <Grid
                            container
                            spacing={matches ? 6 : 0}
                            sx={{ p: matches ? 8 : 0 }}
                        >
                            <Grid xs={12} md={6}>
                                <Card className={styles.card}>Front Area</Card>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Card className={styles.card}>Area 1</Card>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Card className={styles.card}>Area 2</Card>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Card className={styles.card}>Dining Area</Card>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Card className={styles.card}>
                                    Physician Consultation Area
                                </Card>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Card className={styles.card}>
                                    Life Style Consulting Area
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid xs={12} md={6}>
                    <div className={styles.rightBox}>
                        <Grid container sx={{ p: matches ? 8 : 0 }}>
                            <Grid xs={12}>
                                <Table>
                                    <TableHead
                                        className={
                                            styles.monitorSystemTableHead
                                        }
                                    >
                                        <TableRow>
                                            <TableCell>
                                                <p
                                                    className={
                                                        styles.monitorSystemTableHeadTitle
                                                    }
                                                    style={{
                                                        textAlign: 'center',
                                                    }}
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
                                                    Status
                                                </p>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody className={styles.tableBody}>
                                        {mockData.map(
                                            (item: any, index: number) => {
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
                                                                    styles.tableCellSecondValue
                                                                }
                                                            >
                                                                {item.roomName}
                                                            </p>
                                                        </TableCell>
                                                        <TableCell>
                                                            {item.status ===
                                                            0 ? (
                                                                <StyledActiveBadge
                                                                    badgeContent={
                                                                        ''
                                                                    }
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
                                                                    badgeContent={
                                                                        ''
                                                                    }
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
                                            }
                                        )}
                                    </TableBody>
                                </Table>
                            </Grid>
                            <Grid xs={12} textAlign={'end'} sx={{ mt: 3 }}>
                                <Button
                                    variant="contained"
                                    className={styles.flowModifierBttn}
                                    sx={{
                                        mr: matches ? 3 : 0,
                                        mb: matches ? 0 : 3,
                                    }}
                                    fullWidth={matches ? false : true}
                                >
                                    Manage Room
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.changeStationBttn}
                                    fullWidth={matches ? false : true}
                                    onClick={() =>
                                        navigate(QUEUE_MANAGEMENT_PAGE + '/1')
                                    }
                                >
                                    Confirm
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default QueueManagement
