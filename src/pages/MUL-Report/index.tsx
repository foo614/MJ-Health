import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import CustomHeaderSearchInput from 'components/CustomHeader/EndAdornment/SearchInput'
import { MUL_REPORT_PAGE } from 'constant'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './_mul-report.module.scss'

const MULReport = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [checkOutModalOpen, setCheckOutModalOpen] = useState(false)
    const navigate = useNavigate()
    const fakeData = [
        {
            name: 'Abu Bakar',
            identityCardNo: '830516015213',
            age: 54,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Adam Smith',
            identityCardNo: 'S693118A',
            age: 64,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Abu Bakar',
            identityCardNo: '830516015213',
            age: 54,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Adam Smith',
            identityCardNo: 'S693118A',
            age: 64,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Abu Bakar',
            identityCardNo: '830516015213',
            age: 54,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Adam Smith',
            identityCardNo: 'S693118A',
            age: 64,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Abu Bakar',
            identityCardNo: '830516015213',
            age: 54,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Adam Smith',
            identityCardNo: 'S693118A',
            age: 64,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Abu Bakar',
            identityCardNo: '830516015213',
            age: 54,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Adam Smith',
            identityCardNo: 'S693118A',
            age: 64,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Abu Bakar',
            identityCardNo: '830516015213',
            age: 54,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Adam Smith',
            identityCardNo: 'S693118A',
            age: 64,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Abu Bakar',
            identityCardNo: '830516015213',
            age: 54,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Adam Smith',
            identityCardNo: 'S693118A',
            age: 64,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Abu Bakar',
            identityCardNo: '830516015213',
            age: 54,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Adam Smith',
            identityCardNo: 'S693118A',
            age: 64,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Abu Bakar',
            identityCardNo: '830516015213',
            age: 54,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Adam Smith',
            identityCardNo: 'S693118A',
            age: 64,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Abu Bakar',
            identityCardNo: '830516015213',
            age: 54,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Adam Smith',
            identityCardNo: 'S693118A',
            age: 64,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Abu Bakar',
            identityCardNo: '830516015213',
            age: 54,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
        {
            name: 'Adam Smith',
            identityCardNo: 'S693118A',
            age: 64,
            gender: 'Male',
            package: 'K1',
            memberId: '04011010000073001',
            latestScreeningDate: '22-09-2022',
        },
    ]

    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader
                title="MUL REPORT"
                endAdornment={
                    <CustomHeaderSearchInput placeholder="Search..." />
                }
            />
            <div className={styles.monitorSystemDiv}>
                <div style={{ marginTop: '1rem' }}>
                    <TableContainer
                        component={Paper}
                        style={{ maxHeight: 600 }}
                        className={styles.table}
                    >
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead className={styles.tableHeader}>
                                <TableRow>
                                    <TableCell className={styles.textWhite}>
                                        Name
                                    </TableCell>
                                    <TableCell className={styles.textWhite}>
                                        Identify Card No.
                                    </TableCell>
                                    <TableCell className={styles.textWhite}>
                                        Age
                                    </TableCell>
                                    <TableCell className={styles.textWhite}>
                                        Gender
                                    </TableCell>
                                    <TableCell className={styles.textWhite}>
                                        Package
                                    </TableCell>
                                    <TableCell className={styles.textWhite}>
                                        Member ID
                                    </TableCell>
                                    <TableCell className={styles.textWhite}>
                                        Lastest Screening Date
                                    </TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {fakeData.map((row) => (
                                    <TableRow
                                        key={row.identityCardNo}
                                        className={styles.infoTableTR}
                                    >
                                        <TableCell className={styles.fontBold}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell className={styles.fontBold}>
                                            {row.identityCardNo}
                                        </TableCell>
                                        <TableCell className={styles.fontBold}>
                                            {row.age}
                                        </TableCell>
                                        <TableCell className={styles.fontBold}>
                                            {row.gender}
                                        </TableCell>
                                        <TableCell className={styles.fontBold}>
                                            {row.package}
                                        </TableCell>
                                        <TableCell className={styles.fontBold}>
                                            {row.memberId}
                                        </TableCell>
                                        <TableCell className={styles.fontBold}>
                                            {row.latestScreeningDate}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                onClick={() =>
                                                    navigate(
                                                        MUL_REPORT_PAGE + '/1'
                                                    )
                                                }
                                            >
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    )
}

export default MULReport
