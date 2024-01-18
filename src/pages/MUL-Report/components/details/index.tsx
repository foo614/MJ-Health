import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogContent,
    DialogTitle,
    TableFooter,
    Toolbar,
    Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import { MUL_REPORT_PAGE } from 'constant'
import Doctor from 'images/group-712@2x.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../../_mul-report.module.scss'
import Header from '../header'

const MULReportDetail = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [checkOutModalOpen, setCheckOutModalOpen] = useState(false)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const mockData = [
        {
            screeningDate: '22-09-2022',
            numberMUL: 5,
            status: 'In Queue',
            hasPDF: false,
            PDFLink: '',
        },
        {
            screeningDate: '07-08-2022',
            numberMUL: 1,
            status: 'Pending',
            hasPDF: false,
            PDFLink: '',
        },
        {
            screeningDate: '08-05-2022',
            numberMUL: 4,
            status: 'Completed',
            hasPDF: true,
            PDFLink: '',
        },
        {
            screeningDate: '22-12-2018',
            numberMUL: 2,
            status: 'Expired',
            hasPDF: false,
            PDFLink: '',
        },
        {
            screeningDate: '22-09-2022',
            numberMUL: 4,
            status: 'Expired',
            hasPDF: false,
            PDFLink: '',
        },
    ]
    const mockData2 = [
        {
            screening: 'Electrocardiogram',
            item: 'Waist Circumference',
            isSelect: false,
        },
        {
            screening: 'General Measurement',
            item: 'Muscle Mass',
            isSelect: false,
        },
        {
            screening: 'Mammography',
            item: 'Mammography',
            isSelect: true,
        },
        {
            screening: 'Vision and Ocular Tension Test',
            item: 'Color Blind/ Deficiency',
            isSelect: true,
        },
        {
            screening: 'Vision and Ocular Tension Test',
            item: 'Without Glasses (Left)',
            isSelect: true,
        },
    ]

    return (
        <>
            <ResponsiveAppBar />
            <Header title="MUL Report" hasSearch to="" />
            <Box sx={{ p: 3, height: '100vh' }}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <TableContainer
                            component={Paper}
                            style={{ maxHeight: 600 }}
                            className={styles.table}
                        >
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead className={styles.tableHeader}>
                                    <TableRow>
                                        <TableCell className={styles.textWhite}>
                                            Screening Date
                                        </TableCell>
                                        <TableCell className={styles.textWhite}>
                                            No. of MUL
                                        </TableCell>
                                        <TableCell className={styles.textWhite}>
                                            Status
                                        </TableCell>
                                        <TableCell className={styles.textWhite}>
                                            PDF
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {mockData.map((row) => (
                                        <TableRow
                                            key={row.screeningDate}
                                            className={styles.infoTableTR}
                                        >
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                {row.screeningDate}
                                            </TableCell>
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                {row.numberMUL}
                                            </TableCell>
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                {row.status}
                                            </TableCell>
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                {row.hasPDF ? (
                                                    <Button
                                                        variant="contained"
                                                        fullWidth
                                                        onClick={() =>
                                                            navigate(
                                                                MUL_REPORT_PAGE +
                                                                    '/1'
                                                            )
                                                        }
                                                    >
                                                        View
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant="contained"
                                                        disabled
                                                        fullWidth
                                                        sx={{
                                                            backgroundColor:
                                                                'rgba(136, 255, 229.60, 0.20) !important',
                                                        }}
                                                    >
                                                        -
                                                    </Button>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Toolbar
                            sx={{
                                pl: { sm: 2 },
                                pr: { xs: 1, sm: 1 },
                            }}
                            className={styles.tableAppBar}
                        >
                            <Grid
                                container
                                justifyContent={'space-between'}
                                alignItems="flex-end"
                            >
                                <Grid item>
                                    <Typography
                                        sx={{ flex: '1 1 100%' }}
                                        variant="subtitle2"
                                        id="nutrition"
                                        component="div"
                                        className={styles.tableHeaderTitle2}
                                    >
                                        Full Screening Date:
                                    </Typography>
                                    <Typography
                                        sx={{ flex: '1 1 100%' }}
                                        variant="h6"
                                        id="nutrition"
                                        component="div"
                                        className={styles.tableHeaderTitle}
                                    >
                                        22-09-2022
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        sx={{ flex: '1 1 100%', mb: 1 }}
                                        variant="subtitle2"
                                        id="nutrition"
                                        component="div"
                                        justifyContent={'flex-end'}
                                        className={styles.tableHeaderTitle2}
                                    >
                                        Within 90 days period: <b>Yes</b>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Toolbar>
                        <TableContainer
                            component={Paper}
                            sx={{ maxHeight: 600, mb: { xs: 3 } }}
                            className={styles.table2}
                        >
                            <Table>
                                <TableHead className={styles.tableHeader2}>
                                    <TableRow>
                                        <TableCell
                                            className={styles.textPurple}
                                        >
                                            Screening
                                        </TableCell>
                                        <TableCell
                                            className={styles.textPurple}
                                        >
                                            Item
                                        </TableCell>
                                        <TableCell
                                            className={styles.textPurple}
                                        >
                                            Select
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {mockData2.map((row) => (
                                        <TableRow
                                            key={row.screening}
                                            className={styles.infoTableTR}
                                        >
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                {row.screening}
                                            </TableCell>
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                {row.item}
                                            </TableCell>
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                <Checkbox
                                                    defaultChecked={
                                                        row.isSelect
                                                    }
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter
                                    sx={{
                                        background: '#F9F9F9',
                                        width: '100%',
                                    }}
                                >
                                    <TableRow>
                                        <TableCell
                                            className={styles.textPurple}
                                        ></TableCell>
                                        <TableCell
                                            className={styles.textPurple}
                                        ></TableCell>
                                        <TableCell
                                            className={styles.textPurple}
                                        >
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={handleClickOpen}
                                            >
                                                Queue
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
                <Dialog
                    open={open}
                    aria-labelledby="responsive-dialog-title"
                    sx={{
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                    }}
                >
                    <DialogTitle
                        id="scroll-dialog-title"
                        sx={{
                            background:
                                'linear-gradient(90deg, #3ADEBB 0%, #00AEE9 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)',
                        }}
                    >
                        <Box sx={{ ml: 2, mt: 5 }}>
                            <Typography className={styles.title1}>
                                Next Station
                            </Typography>
                            <Typography className={styles.title2}>
                                General Measurement
                            </Typography>
                        </Box>
                    </DialogTitle>
                    <Avatar
                        alt="Remy Sharp"
                        src={Doctor}
                        sx={{
                            width: 120,
                            height: 120,
                            position: 'absolute',
                            right: 40,
                            bottom: 90,
                            border: '5px solid #fff',
                            borderRadius: '99999px',
                        }}
                    />
                    <DialogContent sx={{ width: 600, py: 2 }}>
                        <Grid
                            container
                            justifyContent="flex-end"
                            alignItems="flex-end"
                        >
                            <Grid item xs={6}>
                                <Typography>
                                    Current Waiting List:{' '}
                                    <b className={styles.queueNumber}>2</b>
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            onClick={handleClose}
                                        >
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            onClick={handleClose}
                                        >
                                            Queue Now
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} textAlign={'right'}>
                                <Typography className={styles.actionTitle}>
                                    Current Shift
                                </Typography>
                                <Typography className={styles.actionTitle2}>
                                    Dr.Lee Shen Long
                                </Typography>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Box>
        </>
    )
}

export default MULReportDetail
