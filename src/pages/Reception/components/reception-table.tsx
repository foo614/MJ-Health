import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styles from '../_reception.module.scss'
import TimeComponent from './time-component'
import { useNavigate } from 'react-router-dom'
import { MEMBER_PROFILE_PAGE } from 'constant'
type Props = {
    fakeData: any
}
const ReceptionTable: React.FC<Props> = ({ fakeData }: Props) => {
    const navigate = useNavigate()
    return (
        <TableContainer component={Paper} className={styles.receptionTable}>
            <Table>
                <TableHead className={styles.receptionTableHead}>
                    <TableRow>
                        <TableCell>
                            <p className={styles.receptionTableHeadTitle}>
                                Slot
                            </p>
                        </TableCell>
                        <TableCell>
                            <p className={styles.receptionTableHeadTitle}>
                                Name
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.receptionTableHeadTitle}
                                style={{ textAlign: 'end' }}
                            >
                                IC No.
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.receptionTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Age
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.receptionTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Gender
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.receptionTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Package
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.receptionTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Member ID
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.receptionTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Seq No.
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.receptionTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Check In At
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.receptionTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Register At
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.receptionTableHeadTitle}
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
                            <TableRow
                                key={index}
                                className={
                                    item.seqNo === '-' && item.isHighlighted
                                        ? styles.highlightedRowWithDisabledRow
                                        : item.seqNo === '-'
                                          ? styles.disabledRow
                                          : item.isHighlighted
                                            ? styles.highlightedRow
                                            : ''
                                }
                                sx={{ cursor: 'pointer' }}
                                onClick={() =>
                                    navigate(
                                        `${MEMBER_PROFILE_PAGE}/${item.id}`
                                    )
                                }
                            >
                                <TableCell>
                                    <p className={styles.tableCellBoldValue}>
                                        {item.slot}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.tableCellBoldValue}>
                                        {item.name}
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
                                <TableCell>
                                    <p className={styles.tableCellValue}>
                                        {item.seqNo}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <TimeComponent
                                        value={item.checkInAt}
                                        isEmpty={item?.checkInAt ? false : true}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TimeComponent
                                        value={item.registerAt}
                                        isEmpty={
                                            item?.registerAt ? false : true
                                        }
                                    />
                                </TableCell>
                                <TableCell>
                                    <TimeComponent
                                        value={item.completeAt}
                                        isEmpty={
                                            item?.completeAt ? false : true
                                        }
                                    />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default ReceptionTable
