import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#fff',
        color: '#5A567B',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        background: '#F9F9F9',
    },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}))

function createData(number: string, content: string) {
    return { number, content }
}

const rows = [
    createData(
        '001',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '002',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
    createData(
        '001',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '002',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
    createData(
        '001',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '002',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
    createData(
        '001',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '002',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
    createData(
        '001',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '002',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
    createData(
        '001',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '002',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
    createData(
        '001',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '002',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
    createData(
        '001',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '002',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
    createData(
        '001',
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt.'
    ),
    createData(
        '002',
        'minim veniam; quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat; Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
    ),
]

export default function CustomizedTables() {
    return (
        <TableContainer
            component={Paper}
            sx={{
                mt: 3,
                boxShadow:
                    '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset !important',
                borderRadius: '8px !important',
                maxHeight: '300px',
            }}
        >
            <Table
                aria-label="customized table"
                size="small"
                sx={{ minWidth: 700 }}
                stickyHeader
            >
                <TableHead>
                    <TableRow>
                        <StyledTableCell>No.</StyledTableCell>
                        <StyledTableCell>Content</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.number}>
                            <StyledTableCell component="th" scope="row">
                                {row.number}
                            </StyledTableCell>
                            <StyledTableCell>{row.content}</StyledTableCell>
                            <StyledTableCell>
                                <Button variant="text">Edit</Button>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Button variant="text" sx={{ color: 'red' }}>
                                    Delete
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
