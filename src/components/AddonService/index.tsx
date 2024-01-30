import { Divider } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles'
import Search from 'images/preview.png'

function createData(item: string, price: number) {
    return { item, price }
}

const rows = [
    createData('Gynecological Sonography', 120),
    createData('Body Composition Test', 150),
    createData('CA15-3', 60),
    createData('CA125', 60),
    createData('Homocysteine', 78),
    createData('Gynecological Sonography', 120),
    createData('Body Composition Test', 150),
    createData('CA15-3', 60),
    createData('CA125', 60),
    createData('Homocysteine', 78),
    createData('Gynecological Sonography', 120),
    createData('Body Composition Test', 150),
    createData('CA15-3', 60),
    createData('CA125', 60),
    createData('Homocysteine', 78),
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: '#fff',
        // color: '#5A567B',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: '#211D4E',
        fontWeight: 600,
        background: '#fff',
        borderBottom: 'none',
    },
    [`&.${tableCellClasses.footer}`]: {
        fontSize: 14,
        color: '#211D4E',
        fontWeight: 700,
        background: '#fff',
        borderBottom: 'none',
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

function AddOnService() {
    return (
        <>
            <Grid xs={12} sx={{ px: 3 }}>
                <Divider />
            </Grid>
            <Grid xs={12} sx={{ py: 2, px: 3 }}>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#219B8E',
                        fontSize: '20px',
                        fontWeight: 600,
                    }}
                >
                    Add On Service
                </Typography>
            </Grid>
            <Grid xs={12} sx={{ px: 3 }}>
                <div>
                    <Grid
                        container
                        sx={{
                            border: '2px #EDEDED solid',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                    >
                        <Grid
                            xs={12}
                            sx={{
                                background: '#FBFBFB',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#5A567B',
                                    fontSize: 16,
                                    px: '25px',
                                    py: '13px',
                                }}
                            >
                                Optional Items
                            </Typography>
                        </Grid>
                        <Grid xs={12} sx={{ p: 3 }}>
                            <InputBase
                                id="outlined-search"
                                placeholder="Search..."
                                type="search"
                                sx={{
                                    background: '#F9F9F9',
                                    boxShadow:
                                        '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset',
                                    borderRadius: '5px',
                                    minWidth: '100%',
                                    paddingLeft: 2,
                                }}
                                endAdornment={
                                    <Button
                                        variant="contained"
                                        aria-label="toggle password visibility"
                                        component="label"
                                        sx={{ px: 5 }}
                                    >
                                        <img src={Search} width={'25px'} />
                                    </Button>
                                }
                            />
                        </Grid>
                        <Grid xs={12} sx={{ px: 3, mb: 3 }}>
                            <TableContainer
                                component={Paper}
                                sx={{ boxShadow: 'none' }}
                            >
                                <Table
                                    size="small"
                                    stickyHeader
                                    sx={{
                                        position: 'sticky',
                                        top: 0,
                                        background: '#FDFDFD',
                                    }}
                                >
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>
                                                Items
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                Price (RM)
                                            </StyledTableCell>
                                            <StyledTableCell></StyledTableCell>
                                            <StyledTableCell></StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                                <Box
                                    className={'tableContainer'}
                                    sx={{
                                        height: '200px',
                                        overflow: 'auto',
                                    }}
                                >
                                    <Table size="small">
                                        <TableBody>
                                            {rows.map((row) => (
                                                <StyledTableRow key={row.item}>
                                                    <StyledTableCell>
                                                        {row.item}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">
                                                        {row.price}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">
                                                        <Button
                                                            size="small"
                                                            variant="text"
                                                        >
                                                            Delete
                                                        </Button>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Box>
                                <Table
                                    size="small"
                                    stickyHeader
                                    sx={{
                                        position: 'sticky',
                                        top: 0,
                                        borderTop: '2px solid #EDEDED',
                                    }}
                                >
                                    <TableFooter>
                                        <TableRow>
                                            <StyledTableCell>
                                                Total Item Selected: 12
                                            </StyledTableCell>
                                            <StyledTableCell align="center">
                                                Total Amount: 660
                                            </StyledTableCell>
                                            <StyledTableCell></StyledTableCell>
                                            <StyledTableCell></StyledTableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid xs={12} md={2} mdOffset={10} sx={{ px: 3 }}>
                <Button
                    size="small"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3 }}
                >
                    Save
                </Button>
            </Grid>
        </>
    )
}

export default AddOnService
