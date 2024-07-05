import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import DateInput from 'components/Input/date-input'
import pdf from '../../../../types.pdf'
import styles from '../../_it-room-printing.module.scss'

const testPDF = pdf('lorem-ipsum.pdf')

const AddressStickerTable = () => {
    const fakeData = [
        {
            id: 1,
            name: 'Jeffery Mohamad Bin Christofa',
            category: 'Test Category',
            icNo: '830516015213',
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
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '002',
            timestamp: '08:00',
            status: 1,
        },
        {
            id: 3,
            name: 'Liu Yan',
            icNo: '150103197908131051',
            category: 'Test Category',
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
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '011',
            timestamp: '08:00',
            status: 1,
        },
    ]

    const handleOpenPDF = (pdfFile: any) => {
        const pdfURLPath = `${window.location.origin}/${pdfFile}`
        window.open(pdfURLPath)
    }
    return (
        <>
            <Grid container justifyContent="end">
                <Grid sx={{ mb: 1 }}>
                    <DateInput iconPosition="start" sx={{ width: '250px' }} />
                </Grid>
            </Grid>

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
                                    Status
                                </p>
                            </TableCell>
                            <TableCell>
                                <p
                                    className={
                                        styles.itRoomPrintingTableHeadTitle
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Time Stamp
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
                                            {item.memberID}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.tableCellValue}>
                                            {item.package}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        {item.status === 0 ? (
                                            <Button
                                                variant="contained"
                                                className={styles.waitingBttn}
                                                fullWidth
                                            >
                                                Waiting
                                            </Button>
                                        ) : item.status === 1 ? (
                                            <Button
                                                variant="contained"
                                                className={styles.printBttn}
                                                fullWidth
                                                onClick={() =>
                                                    handleOpenPDF(testPDF)
                                                }
                                            >
                                                Export as PDF
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                className={styles.noValueBttn}
                                                fullWidth
                                            >
                                                -
                                            </Button>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={styles.timeStampValue}
                                            style={{ textAlign: 'center' }}
                                        >
                                            {item.timestamp}
                                        </p>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AddressStickerTable
