import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_monitor-system.module.scss'
import Paper from '@mui/material/Paper'

type Props = {
    fakeData: any
}
const MonitorSystemTopTable: React.FC<Props> = ({ fakeData }: Props) => {
    return (
        <TableContainer
            component={Paper}
            className={styles.monitorSystemTableTop}
        >
            <Table>
                <TableHead className={styles.monitorSystemTableHead}>
                    <TableRow>
                        <TableCell>
                            <p
                                className={styles.monitorSystemTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Room No.
                            </p>
                        </TableCell>
                        <TableCell>
                            <p className={styles.monitorSystemTableHeadTitle}>
                                Exam Room
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.monitorSystemTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Seq No.
                            </p>
                        </TableCell>
                        <TableCell>
                            <p className={styles.monitorSystemTableHeadTitle}>
                                Current Serving
                            </p>
                        </TableCell>
                        <TableCell>
                            <p className={styles.monitorSystemTableHeadTitle}>
                                Doctor
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.monitorSystemTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Serving Time
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.monitorSystemTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Waiting
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.monitorSystemTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Completed
                            </p>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fakeData.map((item: any, index: number) => {
                        if (item.seqNo !== '-') {
                            return (
                                <TableRow key={index}>
                                    <TableCell>
                                        <p className={styles.tableCellValue}>
                                            {item.roomNo}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellBoldValue
                                            }
                                        >
                                            {item.examRoom}
                                        </p>
                                    </TableCell>
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
                                            {item.currentServing}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellBoldValue
                                            }
                                        >
                                            {item.doctor}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellBoldValue
                                            }
                                            style={{ textAlign: 'center' }}
                                        >
                                            {item.servingTime}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={styles.tableCellValue}
                                            style={
                                                item.waiting >= 10
                                                    ? { color: '#DE4E3A' }
                                                    : {}
                                            }
                                        >
                                            {item.waiting}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={styles.tableCellValue}
                                            style={{ color: '#219B8E' }}
                                        >
                                            {item.completed}
                                        </p>
                                    </TableCell>
                                </TableRow>
                            )
                        } else {
                            return (
                                <TableRow key={index}>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellDisabledValue
                                            }
                                        >
                                            {item.roomNo}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellDisabledBoldValue
                                            }
                                        >
                                            {item.examRoom}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellDisabledValue
                                            }
                                        >
                                            {item.seqNo}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellDisabledBoldValue
                                            }
                                        >
                                            {item.currentServing}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellDisabledBoldValue
                                            }
                                        >
                                            {item.doctor}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellDisabledValue
                                            }
                                            style={{ textAlign: 'center' }}
                                        >
                                            {item.servingTime}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellDisabledValue
                                            }
                                        >
                                            {item.waiting}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p
                                            className={
                                                styles.tableCellDisabledValue
                                            }
                                        >
                                            {item.completed}
                                        </p>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MonitorSystemTopTable
