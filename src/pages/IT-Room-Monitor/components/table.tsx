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

type CustomTableProps = {
    area: string
}

type TextAlign = 'left' | 'center' | 'right' | 'justify' | 'inherit'

type TableRowData = {
    accessor: keyof (typeof mockData)[0]
    textAlign?: TextAlign
}

function CustomTableButton({ area }: CustomTableProps) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
            <Button
                variant="contained"
                fullWidth
                className={
                    matches
                        ? area === 'Front Area'
                            ? styles.selectedBttn
                            : styles.unselectedBttn
                        : area === 'Front Area'
                          ? styles.selectedBttnMobile
                          : styles.unselectedBttnMobile
                }
                size="small"
            >
                {area}
            </Button>
        </Grid>
    )
}

const tableHeadTitles: { label: string; textAlign?: TextAlign }[] = [
    { label: 'Room No.', textAlign: 'center' },
    { label: 'Room Name', textAlign: 'left' },
    { label: 'Doctor', textAlign: 'left' },
    { label: 'Nurse', textAlign: 'left' },
    { label: 'Check In At', textAlign: 'center' },
    { label: 'Status', textAlign: 'left' },
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

    const areas = [
        'Front Area',
        'Area 1',
        'Area 2',
        'Dining Area',
        'Physician Consultation Zone',
        'Life Style Consulting Area',
    ]

    const tableBodyData: TableRowData[] = [
        { accessor: 'roomNo', textAlign: 'center' },
        { accessor: 'roomName', textAlign: 'left' },
        { accessor: 'doctor', textAlign: 'left' },
        { accessor: 'nurse', textAlign: 'left' },
        { accessor: 'checkInAt', textAlign: 'center' },
        { accessor: 'status', textAlign: 'left' },
    ]

    const renderStatus = (status: number) => {
        if (status === 0) {
            return (
                <StyledActiveBadge badgeContent={''}>
                    <p className={styles.tableCellValueLast}>Active</p>
                </StyledActiveBadge>
            )
        } else {
            return (
                <StyledInactiveBadge badgeContent={''}>
                    <p className={styles.tableCellValueLast}>Off</p>
                </StyledInactiveBadge>
            )
        }
    }

    return (
        <div className={styles.monitorSystemDiv}>
            <Grid container columnSpacing={2}>
                {areas.map((area, index) => (
                    <CustomTableButton area={area} key={index} />
                ))}
            </Grid>
            <div style={{ marginTop: '1rem' }}>
                <TableContainer
                    component={Paper}
                    className={styles.monitorSystemTableTop}
                >
                    <Table>
                        <TableHead className={styles.monitorSystemTableHead}>
                            <TableRow>
                                {tableHeadTitles.map((title, index) => (
                                    <TableCell
                                        key={index}
                                        style={{ textAlign: title.textAlign }}
                                    >
                                        <p
                                            className={
                                                styles.monitorSystemTableHeadTitle
                                            }
                                        >
                                            {title.label}
                                        </p>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mockData.map((item: any, rowIndex: number) => (
                                <TableRow key={rowIndex}>
                                    {tableBodyData.map(
                                        (
                                            { accessor, textAlign },
                                            cellIndex
                                        ) => (
                                            <TableCell
                                                key={cellIndex}
                                                style={{ textAlign }}
                                            >
                                                <p
                                                    className={
                                                        textAlign === 'center'
                                                            ? styles.tableCellValue
                                                            : styles.tableCellBoldValue
                                                    }
                                                >
                                                    {accessor === 'status'
                                                        ? renderStatus(
                                                              item[accessor]
                                                          )
                                                        : item[accessor]}
                                                </p>
                                            </TableCell>
                                        )
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default CustomTable
