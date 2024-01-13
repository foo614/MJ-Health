import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CheckInAtComponent from './check-in-at-component'
import styles from '../_physician-consultation.module.scss'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PHYSICIAN_CONSULTATION_INFO_PAGE } from 'constant'

type WaitingListTableProps = {
    fakeData: any
    // setOpen: any
}

const PhysicianConsultationCheckoutListTable: React.FC<
    WaitingListTableProps
> = ({ fakeData }: WaitingListTableProps) => {
    const navigate = useNavigate()
    return (
        <TableContainer component={Paper} className={styles.physicianTable}>
            <Table>
                <TableHead className={styles.waitingListTableHeader}>
                    <TableRow>
                        <TableCell
                            colSpan={10}
                            className={styles.waitingListCell}
                        >
                            <p className={styles.waitingListTitle}>
                                CHECK OUT LIST
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
                            <p className={styles.tableCellText}>Waiting At</p>
                        </TableCell>
                        <TableCell>
                            <p className={styles.tableCellText}>Check In At</p>
                        </TableCell>
                        <TableCell>
                            <p className={styles.tableCellText}>Check Out At</p>
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
                                            `${PHYSICIAN_CONSULTATION_INFO_PAGE}/${item.id}`
                                        )
                                    }
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <p className={styles.tableCellNameValue}>
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
                                        isEmpty={item.waitingAt ? false : true}
                                        value={item.waitingAt}
                                    />
                                </TableCell>
                                <TableCell size="small">
                                    <CheckInAtComponent
                                        isEmpty={item.checkInAt ? false : true}
                                        value={item.checkInAt}
                                    />
                                </TableCell>
                                <TableCell size="small">
                                    <CheckInAtComponent
                                        isEmpty={item.checkOutAt ? false : true}
                                        value={item.checkOutAt}
                                    />
                                </TableCell>
                                <TableCell size="small">
                                    <Button
                                        variant="contained"
                                        className={
                                            styles.checkInBttnForCheckOut
                                        }
                                        fullWidth
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
    )
}

export default PhysicianConsultationCheckoutListTable
