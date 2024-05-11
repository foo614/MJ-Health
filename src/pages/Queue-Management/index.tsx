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
import { useState } from 'react'

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

const mockAreaData = [
    { id: 1, name: 'Reception Counter' },
    { id: 2, name: 'Area 1' },
    { id: 3, name: 'Area 2' },
    { id: 4, name: 'Dining Area' },
    { id: 5, name: 'Physcian Consultation Area' },
    { id: 6, name: 'Life Style Consulting Area' },
]

const receptionCounterId = 1

function QueueManagement() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()

    const [selectedArea, setSelectedArea] = useState<number>(2)

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
                            {mockAreaData.map((mockArea) => (
                                <Grid
                                    className={styles.cardGrid}
                                    key={`area${mockArea.id}`}
                                    xs={12}
                                    sm={6}
                                >
                                    <Card
                                        className={`${styles.card} ${selectedArea == mockArea.id && styles.active}`}
                                        onClick={() => {
                                            if (
                                                mockArea.id ==
                                                receptionCounterId
                                            ) {
                                                navigate(
                                                    QUEUE_MANAGEMENT_PAGE +
                                                        '/reception-counter'
                                                )
                                            } else {
                                                setSelectedArea(mockArea.id)
                                            }
                                        }}
                                    >
                                        {mockArea.name}
                                    </Card>
                                </Grid>
                            ))}
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
                                        {selectedArea && (
                                            <TableRow>
                                                <TableCell
                                                    className={
                                                        styles.monitorSystemTableAreaDisplay
                                                    }
                                                    colSpan={3}
                                                >
                                                    {
                                                        mockAreaData.find(
                                                            (x) =>
                                                                x.id ==
                                                                selectedArea
                                                        )?.name
                                                    }
                                                </TableCell>
                                            </TableRow>
                                        )}
                                        <TableRow>
                                            <TableCell
                                                className={
                                                    styles.monitorSystemTableHeadTitle
                                                }
                                            >
                                                Room No.
                                            </TableCell>
                                            <TableCell
                                                className={
                                                    styles.monitorSystemTableHeadTitle
                                                }
                                            >
                                                Room Name
                                            </TableCell>
                                            <TableCell
                                                className={
                                                    styles.monitorSystemTableHeadTitle
                                                }
                                            >
                                                Status
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody className={styles.tableBody}>
                                        {mockData.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <TableRow key={index}>
                                                        <TableCell
                                                            className={
                                                                styles.tableCellValue
                                                            }
                                                        >
                                                            {item.roomNo}
                                                        </TableCell>
                                                        <TableCell
                                                            className={
                                                                styles.tableCellSecondValue
                                                            }
                                                        >
                                                            {item.roomName}
                                                        </TableCell>
                                                        <TableCell
                                                            className={
                                                                styles.tableCellValueLast
                                                            }
                                                        >
                                                            {item.status ===
                                                            0 ? (
                                                                <StyledActiveBadge
                                                                    badgeContent={
                                                                        ''
                                                                    }
                                                                >
                                                                    Active
                                                                </StyledActiveBadge>
                                                            ) : (
                                                                <StyledInactiveBadge
                                                                    badgeContent={
                                                                        ''
                                                                    }
                                                                >
                                                                    Off
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
