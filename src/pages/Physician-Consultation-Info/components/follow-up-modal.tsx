import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Select from '@mui/material/Select'
import Slide from '@mui/material/Slide'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TransitionProps } from '@mui/material/transitions'
import React, { Dispatch, SetStateAction } from 'react'
import styles from '../_physician-consultation-info.module.scss'
import ownStyles from './_follow-up-modal.module.scss'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    matches: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    open: boolean
}

const mockData = [
    {
        id: 1,
        examRm: 'Exam.Rm',
        ufCategory: '',
        serialNo: '1',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt.',
    },
    {
        id: 2,
        examRm: 'Exam.Rm',
        ufCategory: '',
        serialNo: '2',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt.',
    },
    {
        id: 3,
        examRm: 'Exam.Rm',
        ufCategory: '',
        serialNo: '3',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt.',
    },
    {
        id: 4,
        examRm: 'Exam.Rm',
        ufCategory: '',
        serialNo: '4',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt.',
    },
    {
        id: 5,
        examRm: 'Exam.Rm',
        ufCategory: '',
        serialNo: '5',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt.',
    },
    {
        id: 6,
        examRm: 'Exam.Rm',
        ufCategory: '',
        serialNo: '6',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt.',
    },
    {
        id: 7,
        examRm: 'Exam.Rm',
        ufCategory: '',
        serialNo: '7',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt.',
    },
    {
        id: 8,
        examRm: 'Exam.Rm',
        ufCategory: '',
        serialNo: '8',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt.',
    },
    {
        id: 9,
        examRm: 'Exam.Rm',
        ufCategory: '',
        serialNo: '9',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt.',
    },
    {
        id: 10,
        examRm: 'Exam.Rm',
        ufCategory: '',
        serialNo: '10',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d tempor incididunt.',
    },
]

const FollowUpModal: React.FC<Props> = ({ matches, setOpen, open }) => {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                maxWidth="lg"
                fullWidth
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>Follow Up</p>
                </DialogTitle>
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                        color: (theme: any) => theme?.palette?.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent sx={{ padding: '20px' }}>
                    <TableContainer className={ownStyles.tableContainer}>
                        <Table size="small" stickyHeader>
                            <TableHead>
                                <TableCell></TableCell>
                                <TableCell>Exam. Rm</TableCell>
                                <TableCell>U/F Category</TableCell>
                                <TableCell>Serial No.</TableCell>
                                <TableCell>Content</TableCell>
                            </TableHead>
                            <TableBody>
                                {mockData.map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell>{data.examRm}</TableCell>
                                        <TableCell>
                                            <Select
                                                sx={{ width: '150px' }}
                                            ></Select>
                                        </TableCell>
                                        <TableCell>{data.serialNo}</TableCell>
                                        <TableCell>{data.content}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        sx={{ mt: '1.5rem' }}
                    >
                        <Stack direction="row" spacing={1}>
                            <Button
                                variant="contained"
                                className={ownStyles.chooseAllBttn}
                            >
                                Choose All
                            </Button>
                            <Button
                                variant="contained"
                                className={ownStyles.cancelBttn}
                            >
                                Cancel
                            </Button>
                        </Stack>
                        <Box>
                            <Button
                                variant="contained"
                                className={ownStyles.saveAndPrintBttn}
                            >
                                Save & Print
                            </Button>
                        </Box>
                    </Stack>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default FollowUpModal
