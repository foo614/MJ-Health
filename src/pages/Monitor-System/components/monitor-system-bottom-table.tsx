import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styles from '../_monitor-system.module.scss'
type Props = {
    fakeData: any
    currentSelectedItem: any
    setCurrentSelectedItem: any
}
const MonitorSystemBottomTable: React.FC<Props> = ({
    fakeData,
    currentSelectedItem,
    setCurrentSelectedItem,
}: Props) => {
    return (
        <TableContainer
            component={Paper}
            className={styles.monitorSystemTableBottom}
        >
            <Table>
                <TableHead className={styles.monitorSystemTableHead}>
                    <TableRow>
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
                                Name
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.monitorSystemTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Age
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.monitorSystemTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Gender
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.monitorSystemTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Package
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.monitorSystemTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Status
                            </p>
                        </TableCell>
                        <TableCell>
                            <p className={styles.monitorSystemTableHeadTitle}>
                                Current Section
                            </p>
                        </TableCell>
                        <TableCell>
                            <p className={styles.monitorSystemTableHeadTitle}>
                                Next Station
                            </p>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fakeData.map((item: any, index: number) => {
                        return (
                            <TableRow
                                key={index}
                                className={
                                    currentSelectedItem?.id === item.id
                                        ? styles.currentSelectedItem
                                        : styles.cursorPointer
                                }
                                onClick={() => setCurrentSelectedItem(item)}
                            >
                                <TableCell>
                                    <p
                                        className={
                                            styles.tableCellBottomTableValue
                                        }
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.seqNo}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.tableCellBoldValue}>
                                        {item.name}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={
                                            styles.tableCellBottomTableValue
                                        }
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.age}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={
                                            styles.tableCellBottomTableValue
                                        }
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.gender}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={
                                            styles.tableCellBottomTableValue
                                        }
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.package}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={
                                            item.status === 0
                                                ? styles.tableCellWaitingStatusValue
                                                : styles.tableCellCheckingStatusValue
                                        }
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.status === 0
                                            ? 'Waiting'
                                            : 'Checking'}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={
                                            styles.tableCellBottomTableValue
                                        }
                                    >
                                        {item.currentStation}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={
                                            styles.tableCellBottomTableValue
                                        }
                                    >
                                        {item.nextStation}
                                    </p>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MonitorSystemBottomTable
