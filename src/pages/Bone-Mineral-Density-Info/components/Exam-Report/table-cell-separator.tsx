import TableCell from '@mui/material/TableCell'
import styles from '../../_bone-mineral-density-info.module.scss'

const TableCellSeparator = () => {
    return (
        <TableCell
            width="10px"
            sx={{
                backgroundColor: 'transaparent',
                padding: '0',
                minWidth: '10px',
            }}
            className={styles.tableCell}
        ></TableCell>
    )
}

export default TableCellSeparator
