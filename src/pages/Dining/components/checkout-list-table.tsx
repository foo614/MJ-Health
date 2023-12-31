import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CheckInAtComponent from './check-in-at-component'
import styles from '../_dining.module.scss'
import { Button } from '@mui/material'
type CheckOutListTableProps = {
    fakeData: any
}

const CheckOutListTable: React.FC<CheckOutListTableProps> = ({
    fakeData,
}: CheckOutListTableProps) => {
    return (
        <TableContainer component={Paper} className={styles.diningTable}>
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
                            <p className={styles.tableCellText}>Meal</p>
                        </TableCell>
                        <TableCell>
                            <p className={styles.tableCellText}>
                                Remaining Station
                            </p>
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
                                <TableCell size="small">
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
                                    <p className={styles.tableCellValue}>
                                        {item.meal}
                                    </p>
                                </TableCell>
                                <TableCell size="small">
                                    <p className={styles.tableCellValue}>
                                        {item.currentStation}
                                    </p>
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

export default CheckOutListTable
