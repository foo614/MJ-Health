import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableCellSeparator from './table-cell-separator'
import styles from '../../_bone-mineral-density-info.module.scss'

type Props = {
    lastRow?: boolean
}

const TableRowSeparator = ({ lastRow }: Props) => {
    return (
        <TableRow>
            <TableCell
                className={`${styles.tableRowSeparatorCell} ${styles.tableCell}`}
            ></TableCell>
            <TableCell
                width="26%"
                className={`${styles.tableRowSeparatorCell} ${
                    styles.tableCell
                } ${lastRow ? styles.currentBottom : styles.current}`}
            ></TableCell>
            <TableCellSeparator />
            <TableCell
                width="26%"
                className={`${styles.tableRowSeparatorCell} ${
                    styles.tableCell
                } ${lastRow ? styles.backDateBottom : styles.backDate}`}
            ></TableCell>
            <TableCellSeparator />
            <TableCell
                width="26%"
                className={`${styles.tableRowSeparatorCell} ${
                    styles.tableCell
                } ${lastRow ? styles.backDateBottom : styles.backDate}`}
            ></TableCell>
        </TableRow>
    )
}

export default TableRowSeparator
