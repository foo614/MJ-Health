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
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import DateInput from 'components/Input/date-input'
import pdf from '../../../../types.pdf'
import styles from '../../_it-room-printing.module.scss'

const testPDF = pdf('lorem-ipsum.pdf')

const HealthScreeningReport = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
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
            category: 'Test Category',
            icNo: '150103197908131051',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '003',
            timestamp: '08:00',
            status: 1,
        },
        {
            id: 4,
            category: 'Test Category',
            name: 'Lok Wing Ching',
            icNo: '286730572532',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '004',
            timestamp: '08:00',
            status: 1,
        },
        {
            id: 5,
            category: 'Test Category',
            name: 'Angelica Lee',
            icNo: '111000105757',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '-',
            timestamp: '08:00',
            status: 0,
        },
        {
            id: 6,
            category: 'Test Category',
            name: 'Noraini Binti Hassan',
            icNo: '690602136118',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '005',
            timestamp: '08:00',
            status: 0,
        },
        {
            id: 7,
            category: 'Test Category',
            name: 'Grosen Edly Anak Henry',
            icNo: '900311136671',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '-',
            timestamp: '08:00',
            status: 2,
        },
        {
            id: 8,
            category: 'Test Category',
            name: 'Dato Hussin',
            icNo: '510317-13-5131',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '006',
            timestamp: '08:00',
            status: 1,
        },
        {
            id: 9,
            category: 'Test Category',
            name: 'Chen Yu Lin',
            icNo: 'A234567890',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '007',
            timestamp: '08:00',
            status: 2,
        },
        {
            id: 10,
            category: 'Test Category',
            name: 'Deen Zhen',
            icNo: '111000105757',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '008',
            timestamp: '08:00',
            status: 2,
        },
        {
            id: 11,
            category: 'Test Category',
            name: 'Ramasamy Lispra',
            icNo: '900311136671',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '009',
            timestamp: '08:00',
            status: 0,
        },
        {
            id: 12,
            category: 'Test Category',
            name: 'Mohammad Ismail',
            icNo: '690602136118',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '-',
            timestamp: '08:00',
            status: 1,
        },
        {
            id: 13,
            category: 'Test Category',
            name: 'Sanjay Adam',
            icNo: 'S693118A',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '010',
            timestamp: '08:00',
            status: 2,
        },
        {
            id: 14,
            category: 'Test Category',
            name: 'Abu Bakar',
            icNo: '830516-01-5213',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '011',
            timestamp: '08:00',
            status: 1,
        },
    ]

    const health_category_data = [
        {
            id: 1,
            category: 'Audiometry',
            status: 0,
        },
        {
            id: 2,
            category: 'Bone Mineral Density',
            status: 0,
        },
        {
            id: 3,
            category: 'CT Scan',
            status: 1,
        },
        {
            id: 4,
            category: 'Electrocardiogram',
            status: 1,
        },
        {
            id: 5,
            category: 'ENT Examination',
            status: 1,
        },
        {
            id: 6,
            category: 'General Measurement',
            status: 1,
        },
        {
            id: 7,
            category: 'Interview',
            status: 0,
        },
        {
            id: 8,
            category: 'Lung Function Test',
            status: 0,
        },
        {
            id: 9,
            category: 'Mammography',
            status: 0,
        },
        {
            id: 10,
            category: 'Pap’s Smear',
            status: 0,
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

            <Grid container spacing={2}>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                    <TableContainer
                        component={Paper}
                        className={styles.itRoomPrintingTable}
                    >
                        <div className={styles.healthScreeningDiv}>
                            <Stack
                                direction={{
                                    xs: 'column',
                                    sm: 'column',
                                    md: 'column',
                                    lg: 'row',
                                }}
                            >
                                <div>
                                    <p
                                        className={
                                            styles.healthScreeningHeaderText
                                        }
                                    >
                                        Member Fullname
                                    </p>
                                    <p
                                        className={
                                            styles.healthScreeningMemberFullNameValue
                                        }
                                    >
                                        Abu Bakar
                                    </p>
                                    <Stack
                                        direction="row"
                                        columnGap={5}
                                        sx={{ marginTop: '10px' }}
                                    >
                                        <div>
                                            <p
                                                className={
                                                    styles.healthScreeningHeaderText
                                                }
                                            >
                                                IC No.
                                            </p>
                                            <p
                                                className={
                                                    styles.healthScreeningBoldValue
                                                }
                                            >
                                                830516015213
                                            </p>
                                        </div>
                                        <div>
                                            <p
                                                className={
                                                    styles.healthScreeningHeaderText
                                                }
                                            >
                                                Member ID.
                                            </p>
                                            <p
                                                className={
                                                    styles.healthScreeningBoldValue
                                                }
                                            >
                                                0401 1010 0007 3001
                                            </p>
                                        </div>
                                    </Stack>
                                </div>
                                <div
                                    style={
                                        lgUp
                                            ? {
                                                  marginLeft: 'auto',
                                                  marginTop: '10px',
                                              }
                                            : { marginTop: '5px' }
                                    }
                                >
                                    <p
                                        className={
                                            styles.healthScreeningHeaderText
                                        }
                                    >
                                        Current Station
                                    </p>
                                    <p
                                        className={
                                            styles.healthScreeningIdValue
                                        }
                                    >
                                        A-01
                                    </p>
                                </div>
                            </Stack>
                        </div>
                        <Table>
                            <TableBody>
                                {health_category_data.map(
                                    (item: any, index: number) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <p
                                                        className={
                                                            styles.tableCellValue
                                                        }
                                                    >
                                                        {item.id}
                                                    </p>
                                                </TableCell>
                                                <TableCell>
                                                    <p
                                                        className={
                                                            styles.tableCellBoldValue
                                                        }
                                                    >
                                                        {item.category}
                                                    </p>
                                                </TableCell>
                                                <TableCell>
                                                    {item.status === 0 ? (
                                                        <Button
                                                            variant="contained"
                                                            className={
                                                                styles.noValueBttn
                                                            }
                                                            fullWidth
                                                        >
                                                            -
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            variant="contained"
                                                            className={
                                                                styles.doneBttn
                                                            }
                                                            fullWidth
                                                        >
                                                            Done
                                                        </Button>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={6} sm={6} xs={12}>
                    <TableContainer
                        component={Paper}
                        className={styles.itRoomPrintingTable}
                    >
                        <Table>
                            <TableHead
                                className={styles.itRoomPrintingTableHead}
                            >
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
                                                <p
                                                    className={
                                                        styles.tableCellValue
                                                    }
                                                >
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
                                                    className={
                                                        styles.tableCellValue
                                                    }
                                                    style={{
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {item.category}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                <p
                                                    className={
                                                        styles.tableCellValue
                                                    }
                                                >
                                                    {item.memberID}
                                                </p>
                                            </TableCell>
                                            <TableCell>
                                                {item.status === 0 ? (
                                                    <Button
                                                        variant="contained"
                                                        className={
                                                            styles.waitingBttn
                                                        }
                                                        fullWidth
                                                    >
                                                        Waiting
                                                    </Button>
                                                ) : item.status === 1 ? (
                                                    <Button
                                                        variant="contained"
                                                        className={
                                                            styles.printBttn
                                                        }
                                                        fullWidth
                                                        onClick={() =>
                                                            handleOpenPDF(
                                                                testPDF
                                                            )
                                                        }
                                                    >
                                                        Export as PDF
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant="contained"
                                                        className={
                                                            styles.noValueBttn
                                                        }
                                                        fullWidth
                                                    >
                                                        -
                                                    </Button>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <p
                                                    className={
                                                        styles.timeStampValue
                                                    }
                                                    style={{
                                                        textAlign: 'center',
                                                    }}
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
                </Grid>
            </Grid>
        </>
    )
}
export default HealthScreeningReport
