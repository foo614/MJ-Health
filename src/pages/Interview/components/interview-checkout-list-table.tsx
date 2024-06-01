import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import CheckInComponent from 'components/CheckInComponent'
import { INTERVIEW_INFO_PAGE } from 'constant'
import { useNavigate } from 'react-router-dom'
import styles from '../_interview.module.scss'

type WaitingListTableProps = {
    fakeData: any
    // setOpen: any
}

const InterviewCheckOutListTable: React.FC<WaitingListTableProps> = ({
    fakeData,
}: WaitingListTableProps) => {
    const navigate = useNavigate()
    return (
        <TableContainer component={Paper} className={styles.interviewTable}>
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
                        <TableCell width="10%">
                            <p className={styles.tableCellText}>Waiting At</p>
                        </TableCell>
                        <TableCell width="10%">
                            <p className={styles.tableCellText}>Check In At</p>
                        </TableCell>
                        <TableCell width="10%">
                            <p className={styles.tableCellText}>Check Out At</p>
                        </TableCell>
                        <TableCell sx={{ width: '12%' }}></TableCell>
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
                                            `${INTERVIEW_INFO_PAGE}/${item.id}`
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
                                    <CheckInComponent
                                        isEmpty={item.waitingAt ? false : true}
                                        value={item.waitingAt}
                                    />
                                </TableCell>
                                <TableCell size="small">
                                    <CheckInComponent
                                        isEmpty={item.checkInAt ? false : true}
                                        value={item.checkInAt}
                                    />
                                </TableCell>
                                <TableCell size="small">
                                    <CheckInComponent
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
                                        disabled
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

export default InterviewCheckOutListTable
