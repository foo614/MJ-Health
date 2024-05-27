import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styles from '../../_it-room-printing.module.scss'
import { Button, Grid } from '@mui/material'
import { useState } from 'react'
import PrintListModal from '../print-list-modal'
import Stack from '@mui/material/Stack'
type Props = {
    matches: boolean
}
const FOBTList: React.FC<Props> = ({ matches }: Props) => {
    const [openPrintModal, setOpenPrintModal] = useState<boolean>(false)
    const fakeData = [
        {
            id: 1,
            name: 'Jeffery Mohamad Bin Christofa',
            category: 'Test Category',
            icNo: '830516015213',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '001',
            timestamp: '08:00',
            status: 1,
        },
        {
            id: 2,
            name: 'Wong Sin Yi',
            category: 'Test Category',
            icNo: 'S693118A',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '002',
            timestamp: '08:00',
            status: 1,
        },
        {
            id: 3,
            name: 'Liu Yan',
            category: 'Test Category',
            icNo: '150103197908131051',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '003',
            timestamp: '08:00',
            status: 1,
        },
        {
            id: 4,
            name: 'Lok Wing Ching',
            category: 'Test Category',
            icNo: '286730572532',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '004',
            timestamp: '08:00',
            status: 1,
        },
        {
            id: 5,
            name: 'Angelica Lee',
            category: 'Test Category',
            icNo: '111000105757',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '-',
            timestamp: '08:00',
            status: 0,
        },
        {
            id: 6,
            name: 'Noraini Binti Hassan',
            category: 'Test Category',
            icNo: '690602136118',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '005',
            timestamp: '08:00',
            status: 0,
        },
        {
            id: 7,
            name: 'Grosen Edly Anak Henry',
            category: 'Test Category',
            icNo: '900311136671',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '-',
            timestamp: '08:00',
            status: 2,
        },
        {
            id: 8,
            name: 'Dato Hussin',
            category: 'Test Category',
            icNo: '510317-13-5131',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '006',
            timestamp: '08:00',
            status: 1,
        },
        {
            id: 9,
            name: 'Chen Yu Lin',
            category: 'Test Category',
            icNo: 'A234567890',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '007',
            timestamp: '08:00',
            status: 2,
        },
        {
            id: 10,
            name: 'Deen Zhen',
            category: 'Test Category',
            icNo: '111000105757',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '008',
            timestamp: '08:00',
            status: 2,
        },
        {
            id: 11,
            name: 'Ramasamy Lispra',
            category: 'Test Category',
            icNo: '900311136671',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '009',
            timestamp: '08:00',
            status: 0,
        },
        {
            id: 12,
            name: 'Mohammad Ismail',
            category: 'Test Category',
            icNo: '690602136118',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '-',
            timestamp: '08:00',
            status: 1,
        },
        {
            id: 13,
            name: 'Sanjay Adam',
            category: 'Test Category',
            icNo: 'S693118A',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '010',
            timestamp: '08:00',
            status: 2,
        },
        {
            id: 14,
            name: 'Abu Bakar',
            category: 'Test Category',
            icNo: '830516-01-5213',
            age: 56,
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '011',
            timestamp: '08:00',
            status: 1,
        },
    ]

    return (
        <>
            <TableContainer
                component={Paper}
                className={styles.itRoomPrintingTable}
            >
                <Table>
                    <TableHead className={styles.itRoomPrintingTableHead}>
                        <TableRow>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Seq No.
                                </p>
                            </TableCell>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                >
                                    Name
                                </p>
                            </TableCell>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Category
                                </p>
                            </TableCell>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                    style={{ textAlign: 'end' }}
                                >
                                    IC No.
                                </p>
                            </TableCell>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Age
                                </p>
                            </TableCell>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Gender
                                </p>
                            </TableCell>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Package
                                </p>
                            </TableCell>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Member ID
                                </p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fakeData.map((item: any, index: number) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>
                                        <p className={styles.tableCellValue}>
                                            {item.seqNo}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellBoldValue
                                            }
                                        >
                                            {item.name}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={styles.tableCellValue}
                                            style={{ textAlign: 'center' }}
                                        >
                                            {item.category}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={styles.tableCellValue}
                                            style={{ textAlign: 'end' }}
                                        >
                                            {item.icNo}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.tableCellValue}>
                                            {item.age}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.tableCellValue}>
                                            {item.gender}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.tableCellValue}>
                                            {item.package}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.tableCellValue}>
                                            {item.memberID}
                                        </p>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <div
                style={{
                    display: matches ? 'flex' : 'block',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                    columnGap: '15px',
                }}
            >
                <Stack
                    direction="row"
                    columnGap={4}
                    sx={{ paddingTop: '10px', paddingBottom: '10px' }}
                >
                    <p style={{ margin: 'auto' }}>
                        <span className={styles.ctScanBottomText}>Date:</span>
                        <span className={styles.ctScanBottomValue}>
                            12-12-2022 Wednesday
                        </span>
                    </p>
                    <p style={{ margin: 'auto' }}>
                        <span className={styles.ctScanBottomText}>
                            Print Time Stamp:
                        </span>
                        <span className={styles.ctScanBottomValue}>12:12</span>
                    </p>
                </Stack>
                <Stack
                    direction="row"
                    sx={{
                        marginLeft: 'auto',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                    }}
                    columnGap={2}
                >
                    <Button
                        variant="contained"
                        className={styles.ctScanExamDateBttn}
                        fullWidth
                    >
                        Exam. Date
                    </Button>
                    <Button
                        variant="contained"
                        className={styles.ctScanPrintBttn}
                        fullWidth
                        onClick={() => setOpenPrintModal(true)}
                    >
                        Export as PDF
                    </Button>
                </Stack>
            </div>
            {openPrintModal ? (
                <PrintListModal
                    matches={matches}
                    open={openPrintModal}
                    setOpen={setOpenPrintModal}
                />
            ) : null}
        </>
    )
}
export default FOBTList