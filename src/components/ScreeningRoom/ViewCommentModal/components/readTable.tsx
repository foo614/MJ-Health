import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_view-comment-modal.module.scss'

function createData(number: string, content: string) {
    return { number, content }
}

const rows = [
    createData(
        '01',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '02',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
    createData(
        '03',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt m'
    ),
    createData(
        '04',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    ),
    createData(
        '05',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    ),
    createData(
        '01',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '02',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
    createData(
        '03',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt m'
    ),
    createData(
        '04',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    ),
    createData(
        '05',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    ),
    createData(
        '01',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '02',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
    createData(
        '03',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt m'
    ),
    createData(
        '04',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    ),
    createData(
        '05',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    ),
]

export default function ReadTable() {
    return (
        <TableContainer
            component={Paper}
            sx={{
                mt: 3,
                borderRadius: '8px !important',
                maxHeight: '300px',
                background: '#F9F9F9',
            }}
            className={styles.tableContainer}
        >
            <Table
                sx={{
                    minWidth: 650,
                    boxShadow: '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset',
                }}
                size="small"
                aria-label="a dense table"
                stickyHeader
            >
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell>Content</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.number}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                                sx={{ borderBottom: 'none' }}
                            >
                                {row.number}
                            </TableCell>
                            <TableCell sx={{ borderBottom: 'none' }}>
                                {row.content}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
