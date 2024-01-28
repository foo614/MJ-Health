import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableCellSeparator from './table-cell-separator'
import styles from './_table-separator.module.scss'

type Props = {
    headerLabel?: string
    lastRow?: boolean
    noBackground?: boolean
}

const TableRowSeparator = ({ headerLabel, lastRow, noBackground }: Props) => {
    return (
        <TableRow>
            <TableCell
                className={`${styles.tableRowSeparatorCell} ${
                    styles.tableCell
                } ${headerLabel ? styles.headerLabel : ''}`}
            >
                {headerLabel}
            </TableCell>
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
