import { BadgeProps } from '@mui/base/Badge'
import { Badge, Toolbar, Typography, styled } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from '../_radiology-reporting.module.scss'

const mockData = [
    {
        seqNo: '003',
        name: 'Jeffery Mohammad Bin Christofa',
        age: 54,
        gender: 'Male',
        package: 'K1',
        CTScan: 0,
        mammogram: 0,
        xRay: 0,
        sonography: 0,
    },
    {
        seqNo: '002',
        name: 'Lok Wing Ching',
        age: 77,
        gender: 'Female',
        package: 'K3',
        CTScan: 0,
        mammogram: 0,
        xRay: 0,
        sonography: 1,
    },
    {
        seqNo: '003',
        name: 'Jeffery Mohammad Bin Christofa',
        age: 54,
        gender: 'Male',
        package: 'K1',
        CTScan: 0,
        mammogram: 0,
        xRay: 0,
        sonography: 0,
    },
    {
        seqNo: '002',
        name: 'Lok Wing Ching',
        age: 77,
        gender: 'Female',
        package: 'K3',
        CTScan: 0,
        mammogram: 0,
        xRay: 0,
        sonography: 1,
    },
    {
        seqNo: '003',
        name: 'Jeffery Mohammad Bin Christofa',
        age: 54,
        gender: 'Male',
        package: 'K1',
        CTScan: 0,
        mammogram: 0,
        xRay: 0,
        sonography: 0,
    },
    {
        seqNo: '002',
        name: 'Lok Wing Ching',
        age: 77,
        gender: 'Female',
        package: 'K3',
        CTScan: 0,
        mammogram: 0,
        xRay: 0,
        sonography: 1,
    },
]

type TextAlign = 'left' | 'center' | 'right' | 'justify' | 'inherit'

type TableRowData = {
    accessor: keyof (typeof mockData)[0]
    textAlign?: TextAlign
}

const tableHeadTitles: { label: string; textAlign?: TextAlign }[] = [
    { label: 'Seq No.', textAlign: 'left' },
    { label: 'Name', textAlign: 'left' },
    { label: 'Age', textAlign: 'left' },
    { label: 'Gender', textAlign: 'left' },
    { label: 'Package', textAlign: 'left' },
    { label: 'CT Scan', textAlign: 'center' },
    { label: 'Mammogram', textAlign: 'center' },
    { label: 'X-Ray', textAlign: 'center' },
    { label: 'Sonography', textAlign: 'center' },
]

function CompleteTable() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const StyledActiveBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: matches ? 65 : 63,
            top: matches ? 11 : 12,
            border: `5px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            backgroundColor: '#3ADEBB',
        },
    }))
    const StyledInactiveBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: matches ? 95 : 63,
            top: matches ? 11 : 12,
            border: `5px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            backgroundColor: '#F9C234',
        },
    }))

    const tableBodyData: TableRowData[] = [
        { accessor: 'seqNo', textAlign: 'left' },
        { accessor: 'name', textAlign: 'left' },
        { accessor: 'age', textAlign: 'left' },
        { accessor: 'gender', textAlign: 'left' },
        { accessor: 'package', textAlign: 'left' },
        { accessor: 'CTScan', textAlign: 'center' },
        { accessor: 'mammogram', textAlign: 'center' },
        { accessor: 'xRay', textAlign: 'center' },
        { accessor: 'sonography', textAlign: 'center' },
    ]

    const renderStatus = (status: number) => {
        if (status === 0) {
            return (
                <StyledActiveBadge badgeContent={''}>
                    <p className={styles.tableCellValueLast}>Ready</p>
                </StyledActiveBadge>
            )
        } else {
            return (
                <StyledInactiveBadge badgeContent={''}>
                    <p className={styles.tableCellValueLast}>Screening</p>
                </StyledInactiveBadge>
            )
        }
    }

    return (
        <div className={styles.monitorSystemDiv}>
            <div style={{ marginTop: '1rem' }}>
                <Toolbar
                    sx={{
                        pl: { sm: 2 },
                        pr: { xs: 1, sm: 1 },
                    }}
                    className={styles.monitorSystemTableHead}
                >
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h6"
                        id="nutrition"
                        component="div"
                        className={styles.tableHeaderTitle}
                    >
                        Nutrition
                    </Typography>
                </Toolbar>
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
                                                    {textAlign === 'center'
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

export default CompleteTable
