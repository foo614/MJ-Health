import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Paper from '@mui/material/Paper'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import * as React from 'react'
import { useState } from 'react'
import styles from '../_sonography-detail.module.scss'

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<any>>
    open: boolean
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: '#fff',
        // color: '#5A567B',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        // background: '#F9F9F9',
        // borderBottom: 'none',
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

const CommentDialog = ({ setOpen, open }: Props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [selectedType, setSelectedType] = useState('comment')

    const handleButtonChange = (type: string) => {
        setSelectedType(type)
    }

    const RowButtonOptions = () => {
        return (
            <>
                <Grid xs={12} sx={{ p: 3 }}>
                    <Button
                        variant="contained"
                        size={matches ? 'medium' : 'small'}
                        sx={{
                            background:
                                selectedType === 'comment' ? '#fff' : '#EDEDED',
                            boxShadow:
                                '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                            borderRadius: '5px',
                            color:
                                selectedType === 'comment'
                                    ? '#211D4E'
                                    : '#5A567B',
                            fontWeight: 600,
                            marginRight: '1em',
                            '&:hover': {
                                color: '#fff', // Change font color to white on hover
                            },
                        }}
                        onClick={() => handleButtonChange('comment')}
                    >
                        Comment
                    </Button>
                    <Button
                        variant="contained"
                        size={matches ? 'medium' : 'small'}
                        sx={{
                            background:
                                selectedType === 'sizeAndLocation'
                                    ? '#fff'
                                    : '#EDEDED',
                            boxShadow:
                                '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                            borderRadius: '5px',
                            color:
                                selectedType === 'sizeAndLocation'
                                    ? '#211D4E'
                                    : '#5A567B',
                            fontWeight: 600,
                            marginRight: '1em',
                            '&:hover': {
                                color: '#fff', // Change font color to white on hover
                            },
                        }}
                        onClick={() => handleButtonChange('sizeAndLocation')}
                    >
                        Size & Location
                    </Button>
                    <Button
                        variant="contained"
                        size={matches ? 'medium' : 'small'}
                        sx={{
                            background:
                                selectedType === 'freeHandAndBirads'
                                    ? '#fff'
                                    : '#EDEDED',
                            boxShadow:
                                '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                            borderRadius: '5px',
                            color:
                                selectedType === 'freeHandAndBirads'
                                    ? '#211D4E'
                                    : '#5A567B',
                            fontWeight: 600,
                            '&:hover': {
                                color: '#fff', // Change font color to white on hover
                            },
                        }}
                        onClick={() => handleButtonChange('freeHandAndBirads')}
                    >
                        Free Hand & Birads
                    </Button>
                </Grid>
            </>
        )
    }

    return (
        <React.Fragment>
            <Dialog open={open} keepMounted maxWidth={'md'}>
                <DialogContent className={styles.modalDialogContent} dividers>
                    <RowButtonOptions />
                    {selectedType === 'comment' && (
                        <Grid
                            container
                            sx={{
                                background: '#FDFDFD',
                                borderaRadius: '5px',
                                border: '2px #EDEDED solid',
                            }}
                        >
                            <Grid xs>
                                <>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <TextField
                                                fullWidth
                                                placeholder="Search..."
                                            />
                                        </Grid>
                                        <Grid xs={12}>
                                            <TableContainer component={Paper}>
                                                <Table
                                                    size="small"
                                                    stickyHeader
                                                    sx={{
                                                        position: 'sticky',
                                                        top: 0,
                                                        background: '#F9F9F9',
                                                        border: '2px #EDEDED solid',
                                                    }}
                                                >
                                                    <TableHead>
                                                        <TableRow>
                                                            <StyledTableCell>
                                                                Code
                                                            </StyledTableCell>
                                                            <StyledTableCell align="left">
                                                                Content
                                                            </StyledTableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                </Table>
                                                <Box
                                                    sx={{
                                                        height: '200px',
                                                        overflow: 'auto',
                                                    }}
                                                    className={
                                                        styles.tableContainer
                                                    }
                                                >
                                                    <Table>
                                                        <TableBody>
                                                            {rows.map((row) => (
                                                                <StyledTableRow
                                                                    key={
                                                                        row.number
                                                                    }
                                                                >
                                                                    <StyledTableCell>
                                                                        {
                                                                            row.number
                                                                        }
                                                                    </StyledTableCell>
                                                                    <StyledTableCell>
                                                                        {
                                                                            row.content
                                                                        }
                                                                    </StyledTableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </Box>
                                            </TableContainer>
                                        </Grid>
                                        <Grid xs={12}>
                                            <TableContainer component={Paper}>
                                                <Table
                                                    size="small"
                                                    stickyHeader
                                                    sx={{
                                                        position: 'sticky',
                                                        top: 0,
                                                        background: '#F9F9F9',
                                                        border: '2px #EDEDED solid',
                                                    }}
                                                >
                                                    <TableHead
                                                        sx={{
                                                            borderBottom:
                                                                'none',
                                                        }}
                                                    >
                                                        <TableRow
                                                            className={
                                                                styles.stickyHeader
                                                            }
                                                        >
                                                            <StyledTableCell>
                                                                Code
                                                            </StyledTableCell>
                                                            <StyledTableCell align="left">
                                                                Content
                                                            </StyledTableCell>
                                                            <StyledTableCell></StyledTableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                </Table>
                                                <Box
                                                    sx={{
                                                        height: '200px',
                                                        overflow: 'auto',
                                                    }}
                                                    className={
                                                        styles.tableContainer
                                                    }
                                                >
                                                    <Table>
                                                        <TableBody>
                                                            {rows.map((row) => (
                                                                <StyledTableRow
                                                                    key={
                                                                        row.number
                                                                    }
                                                                >
                                                                    <StyledTableCell>
                                                                        {
                                                                            row.number
                                                                        }
                                                                    </StyledTableCell>
                                                                    <StyledTableCell>
                                                                        {
                                                                            row.content
                                                                        }
                                                                    </StyledTableCell>
                                                                    <StyledTableCell>
                                                                        <Button
                                                                            size="small"
                                                                            variant="text"
                                                                            sx={{
                                                                                color: 'red',
                                                                            }}
                                                                        >
                                                                            Delete
                                                                        </Button>
                                                                    </StyledTableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </Box>
                                            </TableContainer>
                                        </Grid>
                                    </Grid>
                                </>
                            </Grid>
                            <Grid xs>
                                <>
                                    <Grid container p={2} spacing={2}>
                                        <Grid xs={12}>Overview</Grid>
                                        <Grid xs={12}>
                                            <TextField
                                                multiline
                                                fullWidth
                                                sx={{ height: '400px' }}
                                                value="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"
                                            />
                                        </Grid>
                                        <Grid xs={6}>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                onClick={() => setOpen(false)}
                                            >
                                                Confirm
                                            </Button>
                                        </Grid>
                                        <Grid xs={6}>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                onClick={() => setOpen(false)}
                                            >
                                                Cancel
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </>
                            </Grid>
                        </Grid>
                    )}
                    {selectedType === 'sizeAndLocation' && (
                        <Grid
                            container
                            sx={{
                                background: '#FDFDFD',
                                borderaRadius: '5px',
                                border: '2px #EDEDED solid',
                            }}
                        >
                            <Grid xs>
                                <>
                                    <Grid container>
                                        <Grid
                                            xs={12}
                                            sx={{
                                                border: '2px #EDEDED solid',
                                                background: '#F9F9F9',
                                                p: 2,
                                                fontWeight: 600,
                                                fontSize: 14,
                                            }}
                                        >
                                            Size
                                        </Grid>
                                        <Grid xs={12}>
                                            <Stack
                                                direction={'row'}
                                                alignItems={'center'}
                                                height={200}
                                                sx={{ mx: 2 }}
                                            >
                                                {/* two input in same row */}
                                                <TextField
                                                    sx={{
                                                        background: '#F9F9F9',
                                                    }}
                                                    value={'-'}
                                                />
                                                <Typography
                                                    sx={{
                                                        color: '#5A567B',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {'cm'}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        background: '#F9F9F9',
                                                        mx: 1,
                                                    }}
                                                >
                                                    {'x'}
                                                </Typography>
                                                <TextField
                                                    sx={{
                                                        background: '#F9F9F9',
                                                    }}
                                                    value={'-'}
                                                />
                                                <Typography
                                                    sx={{
                                                        color: '#5A567B',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {'cm'}
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            sx={{
                                                border: '2px #EDEDED solid',
                                                background: '#F9F9F9',
                                                p: 2,
                                                fontWeight: 600,
                                                fontSize: 14,
                                            }}
                                        >
                                            Location
                                        </Grid>
                                        <Grid xs={12}>
                                            <Stack
                                                direction={'row'}
                                                justifyContent={'center'}
                                                alignItems={'center'}
                                                height={200}
                                                sx={{ mx: 2 }}
                                            >
                                                {/* two input in same row */}
                                                <TextField
                                                    sx={{
                                                        background: '#F9F9F9',
                                                    }}
                                                    value={'-'}
                                                />
                                                <Typography
                                                    sx={{
                                                        color: '#5A567B',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {"o'clock,"}
                                                </Typography>
                                                <TextField
                                                    sx={{
                                                        background: '#F9F9F9',
                                                    }}
                                                    value={'-'}
                                                />
                                                <Typography
                                                    sx={{
                                                        color: '#5A567B',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {'cm away from nipple;'}
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </>
                            </Grid>
                            <Grid xs>
                                <>
                                    <Grid container p={2} spacing={2}>
                                        <Grid xs={12}>Overview</Grid>
                                        <Grid xs={12}>
                                            <TextField
                                                multiline
                                                fullWidth
                                                sx={{ height: '400px' }}
                                                value={
                                                    'minim veniam; quis nostrud; exercitation ullamco laboris nisi ut aliquip \n\nsize of 0.1 cm x 0.2 cm at 6 o’clock; 2cm away from nipple'
                                                }
                                            />
                                        </Grid>
                                        <Grid xs={6}>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                onClick={() => setOpen(false)}
                                            >
                                                Confirm
                                            </Button>
                                        </Grid>
                                        <Grid xs={6}>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                onClick={() => setOpen(false)}
                                            >
                                                Cancel
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </>
                            </Grid>
                        </Grid>
                    )}
                    {selectedType === 'freeHandAndBirads' && (
                        <Grid
                            container
                            sx={{
                                background: '#FDFDFD',
                                borderaRadius: '5px',
                                border: '2px #EDEDED solid',
                            }}
                        >
                            <Grid xs>
                                <>
                                    <Grid container>
                                        <Grid
                                            xs={12}
                                            sx={{
                                                border: '2px #EDEDED solid',
                                                background: '#F9F9F9',
                                                p: 2,
                                                fontWeight: 600,
                                                fontSize: 14,
                                            }}
                                        >
                                            Free Hand
                                        </Grid>
                                        <Grid xs={12}>
                                            <Stack
                                                direction={'row'}
                                                alignItems={'start'}
                                                height={200}
                                                sx={{ mx: 2, mt: 1 }}
                                            >
                                                <Typography
                                                    sx={{
                                                        color: '#5A567B',
                                                        fontSize: '16px',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {
                                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt'
                                                    }
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid
                                            xs={12}
                                            sx={{
                                                border: '2px #EDEDED solid',
                                                background: '#F9F9F9',
                                                p: 2,
                                                fontWeight: 600,
                                                fontSize: 14,
                                            }}
                                        >
                                            Birads
                                        </Grid>
                                        <Grid xs={12} sx={{ p: 2 }}>
                                            <>
                                                <Grid
                                                    container
                                                    rowSpacing={1}
                                                    columnSpacing={{
                                                        xs: 1,
                                                        sm: 2,
                                                        md: 3,
                                                    }}
                                                >
                                                    <FormControl>
                                                        <RadioGroup
                                                            name="radio-buttons-group"
                                                            row
                                                        >
                                                            <Grid xs={4} md={3}>
                                                                <FormControlLabel
                                                                    value="1"
                                                                    control={
                                                                        <Radio />
                                                                    }
                                                                    label="1"
                                                                />
                                                            </Grid>
                                                            <Grid xs={4} md={3}>
                                                                <FormControlLabel
                                                                    value="2"
                                                                    control={
                                                                        <Radio />
                                                                    }
                                                                    label="2"
                                                                />
                                                            </Grid>
                                                            <Grid xs={4} md={3}>
                                                                <FormControlLabel
                                                                    value="3"
                                                                    control={
                                                                        <Radio />
                                                                    }
                                                                    label="3"
                                                                />
                                                            </Grid>
                                                            <Grid xs={4} md={3}>
                                                                <FormControlLabel
                                                                    value="4a"
                                                                    control={
                                                                        <Radio />
                                                                    }
                                                                    label="4a"
                                                                />
                                                            </Grid>
                                                            <Grid xs={4} md={3}>
                                                                <FormControlLabel
                                                                    value="4b"
                                                                    control={
                                                                        <Radio />
                                                                    }
                                                                    label="4b"
                                                                />
                                                            </Grid>
                                                            <Grid xs={4} md={3}>
                                                                <FormControlLabel
                                                                    value="4c"
                                                                    control={
                                                                        <Radio />
                                                                    }
                                                                    label="4c"
                                                                />
                                                            </Grid>
                                                            <Grid xs={4} md={3}>
                                                                <FormControlLabel
                                                                    value="5"
                                                                    control={
                                                                        <Radio />
                                                                    }
                                                                    label="5"
                                                                />
                                                            </Grid>
                                                            <Grid xs={4} md={3}>
                                                                <FormControlLabel
                                                                    value="6"
                                                                    control={
                                                                        <Radio />
                                                                    }
                                                                    label="6"
                                                                />
                                                            </Grid>
                                                        </RadioGroup>
                                                    </FormControl>
                                                </Grid>
                                            </>
                                        </Grid>
                                    </Grid>
                                </>
                            </Grid>
                            <Grid xs>
                                <>
                                    <Grid container p={2} spacing={2}>
                                        <Grid xs={12}>Overview</Grid>
                                        <Grid xs={12}>
                                            <TextField
                                                multiline
                                                fullWidth
                                                sx={{ height: '400px' }}
                                                value={
                                                    'minim veniam; quis nostrud; exercitation ullamco laboris nisi ut aliquip \n\nsize of 0.1 cm x 0.2 cm at 6 o’clock; 2cm away from nipple'
                                                }
                                            />
                                        </Grid>
                                        <Grid xs={6}>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                onClick={() => setOpen(false)}
                                            >
                                                Confirm
                                            </Button>
                                        </Grid>
                                        <Grid xs={6}>
                                            <Button
                                                fullWidth
                                                variant="outlined"
                                                onClick={() => setOpen(false)}
                                            >
                                                Cancel
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </>
                            </Grid>
                        </Grid>
                    )}
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default CommentDialog
