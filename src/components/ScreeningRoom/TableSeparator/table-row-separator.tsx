import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import styles from './_table-separator.module.scss'
import TableCellSeparator from './table-cell-separator'

type Props = {
    headerLabel?: string
    lastRow?: boolean
    noBackground?: boolean
    readonly?: boolean
    isCheckboxRow?: boolean
}

const TableRowSeparator = ({
    headerLabel,
    lastRow,
    noBackground,
    readonly,
    isCheckboxRow,
}: Props) => {
    return (
        <TableRow>
            <TableCell
                className={`${styles.tableRowSeparatorCell} ${
                    styles.tableCell
                } ${headerLabel ? styles.headerLabel : ''} ${
                    readonly ? styles.readonly : ''
                }`}
            >
                {headerLabel}
            </TableCell>

            {isCheckboxRow === undefined ? (
                <>
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
                </>
            ) : (
                <>
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
                    <TableCell
                        className={styles.tableCell}
                        sx={{ width: '52%' }}
                    />
                </>
            )}
        </TableRow>
    )
}

export default TableRowSeparator
