import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CheckInAtComponent from './check-in-at-component'
import styles from "../_health-management-consultation.module.scss";
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ViewPDFModal from './view-pdf-modal'
import { HEALTH_MANAGEMENT_CONSULTATION_INFO_PAGE, PHYSICIAN_CONSULTATION_INFO_PAGE } from 'constant'
type WaitingListTableProps = {
    fakeData: any
    matches: any
    // setOpen: any
}

const HealthManagementConsultationWaitingListTable: React.FC<
    WaitingListTableProps
> = ({ fakeData, matches }: WaitingListTableProps) => {
    const navigate = useNavigate()
    const [openViewPDFModal, setOpenViewPDFModal] = useState<boolean>(false)
    return (
        <>
            <TableContainer component={Paper} className={styles.healthManagementTable}>
                <Table>
                    <TableHead className={styles.waitingListTableHeader}>
                        <TableRow>
                            <TableCell
                                colSpan={10}
                                className={styles.waitingListCell}
                            >
                                <p className={styles.waitingListTitle}>
                                    WAITING LIST
                                </p>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <p className={styles.tableCellText}>Seq.No</p>
                            </TableCell>
                            <TableCell sx={{ width: '20%' }}>
                                <p className={styles.tableCellNameText}>Name</p>
                            </TableCell>
                            <TableCell>
                                <p className={styles.tableCellText}>Age</p>
                            </TableCell>
                            <TableCell>
                                <p className={styles.tableCellText}>Gender</p>
                            </TableCell>
                            <TableCell>
                                <p className={styles.tableCellText}>Package</p>
                            </TableCell>
                            <TableCell>
                                <p className={styles.tableCellText}>
                                    Waiting At
                                </p>
                            </TableCell>
                            <TableCell>
                                <p className={styles.tableCellText}>
                                    Check In At
                                </p>
                            </TableCell>
                            <TableCell sx={{ width: '10%' }}>
                                <p className={styles.tableCellText}>
                                    HS Report
                                </p>
                            </TableCell>
                            <TableCell sx={{ width: '10%' }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fakeData.map((item: any, index: number) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell size="small">
                                        <p className={styles.tableCellValue}>
                                            {item.seqNo}
                                        </p>
                                    </TableCell>
                                    <TableCell
                                        size="small"
                                        onClick={() =>
                                            navigate(
                                                `${HEALTH_MANAGEMENT_CONSULTATION_INFO_PAGE}/${item.id}`
                                            )
                                        }
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <p
                                            className={
                                                styles.tableCellNameValue
                                            }
                                        >
                                            {item.name}
                                        </p>
                                    </TableCell>
                                    <TableCell size="small">
                                        <p className={styles.tableCellValue}>
                                            {item.age}
                                        </p>
                                    </TableCell>
                                    <TableCell size="small">
                                        <p className={styles.tableCellValue}>
                                            {item.gender}
                                        </p>
                                    </TableCell>
                                    <TableCell size="small">
                                        <p className={styles.tableCellValue}>
                                            {item.package}
                                        </p>
                                    </TableCell>
                                    <TableCell size="small">
                                        <CheckInAtComponent
                                            isEmpty={
                                                item.waitingAt ? false : true
                                            }
                                            value={item.waitingAt}
                                        />
                                    </TableCell>
                                    <TableCell size="small">
                                        <CheckInAtComponent
                                            isEmpty={
                                                item.checkInAt ? false : true
                                            }
                                            value={item.checkInAt}
                                        />
                                    </TableCell>
                                    <TableCell size="small">
                                        <Button
                                            variant="contained"
                                            className={styles.viewPDFBttn}
                                            fullWidth
                                            onClick={() =>
                                                setOpenViewPDFModal(true)
                                            }
                                        >
                                            View PDF
                                        </Button>
                                    </TableCell>
                                    <TableCell size="small">
                                        <Button
                                            variant="contained"
                                            className={styles.checkInBttn}
                                            fullWidth
                                            onClick={() =>
                                                navigate(
                                                    `${HEALTH_MANAGEMENT_CONSULTATION_INFO_PAGE}/${item.id}`
                                                )
                                            }
                                        >
                                            Check In
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {openViewPDFModal ? (
                <ViewPDFModal
                    matches={matches}
                    open={openViewPDFModal}
                    setOpen={setOpenViewPDFModal}
                />
            ) : null}
        </>
    )
}

export default HealthManagementConsultationWaitingListTable
