import { Button, Toolbar, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { RADIOLOGY_REPORTING_PAGE } from 'constant'
import { useNavigate } from 'react-router-dom'
import styles from '../_radiology-reporting.module.scss'

const mockData = [
    {
        seqNo: '001',
        name: 'Chen Yu Lin',
        age: 25,
        gender: 'Male',
        package: 'K1',
        ICNo: '830516015213',
        memberId: '04011010000073001',
        confirmedAt: '13:40',
    },
    {
        seqNo: '002',
        name: 'Wang Jin Pyng',
        age: 56,
        gender: 'Female',
        package: 'K1',
        ICNo: 'S693118A',
        memberId: '040110100600001',
        confirmedAt: '13:40',
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
    { label: 'IC No.', textAlign: 'left' },
    { label: 'Member ID', textAlign: 'left' },
    { label: 'Confirmed at', textAlign: 'center' },
]

function CompleteTable() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()

    const tableBodyData: TableRowData[] = [
        { accessor: 'seqNo', textAlign: 'left' },
        { accessor: 'name', textAlign: 'left' },
        { accessor: 'age', textAlign: 'left' },
        { accessor: 'gender', textAlign: 'left' },
        { accessor: 'package', textAlign: 'left' },
        { accessor: 'ICNo', textAlign: 'left' },
        { accessor: 'memberId', textAlign: 'left' },
        { accessor: 'confirmedAt', textAlign: 'center' },
    ]

    const renderButtonText = (text: string) => {
        return (
            <Button variant="contained" color="success">
                {text}
            </Button>
        )
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
                        COMPLETED LIST
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
                                <TableRow
                                    key={rowIndex}
                                    onClick={() =>
                                        navigate(
                                            RADIOLOGY_REPORTING_PAGE +
                                                '/' +
                                                rowIndex +
                                                1
                                        )
                                    }
                                    sx={{ cursor: 'pointer' }}
                                    hover
                                >
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
                                                        ? renderButtonText(
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
