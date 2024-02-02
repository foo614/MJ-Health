import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableCellSeparator from './table-cell-separator'
import styles from './_table-separator.module.scss'

type Props = {
    headerLabel?: string
    lastRow?: boolean
    noBackground?: boolean
    readonly?: boolean
}

const TableRowSeparator = ({
    headerLabel,
    lastRow,
    noBackground,
    readonly,
}: Props) => {
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
                } ${readonly ? styles.readonly : ''}`}
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
                } ${readonly ? styles.readonly : ''}`}
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
                } ${readonly ? styles.readonly : ''}`}
            ></TableCell>
        </TableRow>
    )
}

export default TableRowSeparator
