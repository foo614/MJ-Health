import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styles from '../../_it-room-printing.module.scss'
import { Button, Stack } from '@mui/material'
import { useState } from 'react'
import PrintListModal from '../print-list-modal'
type Props = {
    matches: boolean
}
const MakeUpLaterList: React.FC<Props> = ({ matches }: Props) => {
    const [openPrintModal, setOpenPrintModal] = useState<boolean>(false)
    const fakeData = [
        {
            id: 1,
            name: 'Jeffery Mohamad Bin Christofa',
            category: 'Test Category',
            icNo: '830516015213',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 1,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 2,
            category: 'Test Category',
            name: 'Wong Sin Yi',
            icNo: 'S693118A',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 1,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 3,
            category: 'Test Category',
            name: 'Liu Yan',
            icNo: '150103197908131051',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 1,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 4,
            category: 'Test Category',
            name: 'Lok Wing Ching',
            icNo: '286730572532',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 1,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 5,
            category: 'Test Category',
            name: 'Angelica Lee',
            icNo: '111000105757',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 0,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 6,
            category: 'Test Category',
            name: 'Noraini Binti Hassan',
            icNo: '690602136118',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 0,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 7,
            category: 'Test Category',
            name: 'Grosen Edly Anak Henry',
            icNo: '900311136671',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 2,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 8,
            category: 'Test Category',
            name: 'Dato Hussin',
            icNo: '510317-13-5131',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 1,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 9,
            name: 'Chen Yu Lin',
            category: 'Test Category',
            icNo: 'A234567890',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 2,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 10,
            name: 'Deen Zhen',
            category: 'Test Category',
            icNo: '111000105757',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 2,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 11,
            category: 'Test Category',
            name: 'Ramasamy Lispra',
            icNo: '900311136671',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 0,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 12,
            category: 'Test Category',
            name: 'Mohammad Ismail',
            icNo: '690602136118',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 1,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 13,
            category: 'Test Category',
            name: 'Sanjay Adam',
            icNo: 'S693118A',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 2,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
        },
        {
            id: 14,
            name: 'Abu Bakar',
            category: 'Test Category',
            icNo: '830516-01-5213',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: 'MUL 1',
            timestamp: '08:00',
            status: 1,
            noOfMul: 2,
            checkInAt: '08:00',
            completeAt: '09:00',
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
                                    Member ID
                                </p>
                            </TableCell>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    No.of MUL
                                </p>
                            </TableCell>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Check In At
                                </p>
                            </TableCell>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Complete At
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
                                            style={{
                                                textAlign: 'center',
                                            }}
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
                                            {item.memberID}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellBoldValue
                                            }
                                            style={{ textAlign: 'center' }}
                                        >
                                            {item.noOfMul}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={styles.tableCellValue}
                                            style={{ textAlign: 'center' }}
                                        >
                                            {item.checkInAt}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={styles.tableCellValue}
                                            style={{ textAlign: 'center' }}
                                        >
                                            {item.completeAt}
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
                    sx={{ paddingTop: '10px', paddingBottom: '10px' }}
                >
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
                >
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

export default MakeUpLaterList