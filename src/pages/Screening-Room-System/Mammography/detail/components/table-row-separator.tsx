import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableCellSeparator from './table-cell-separator'
import styles from '../_mammography-detail.module.scss'

type Props = {
    lastRow?: boolean
    noBackground?: boolean
}

const TableRowSeparator = ({ lastRow, noBackground }: Props) => {
    return (
        <TableRow>
            <TableCell
                className={`${styles.tableRowSeparatorCell} ${styles.tableCell}`}
            ></TableCell>
            <TableCell
                width="26%"
                className={`${styles.tableRowSeparatorCell} ${
                    styles.tableCell
                } ${
                    noBackground
                        ? ''
                        : lastRow
                          ? styles.currentBottom
                          : styles.current
                }`}
            ></TableCell>
            <TableCellSeparator />
            <TableCell
                width="26%"
                className={`${styles.tableRowSeparatorCell} ${
                    styles.tableCell
                } ${
                    noBackground
                        ? ''
                        : lastRow
                          ? styles.backDateBottom
                          : styles.backDate
                }`}
            ></TableCell>
            <TableCellSeparator />
            <TableCell
                width="26%"
                className={`${styles.tableRowSeparatorCell} ${
                    styles.tableCell
                } ${
                    noBackground
                        ? ''
                        : lastRow
                          ? styles.backDateBottom
                          : styles.backDate
                }`}
            ></TableCell>
        </TableRow>
    )
}

export default TableRowSeparator
