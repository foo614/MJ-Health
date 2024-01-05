import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_sticker-printing.module.scss'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    matches: any
    setOpen: any
    open: any
}

const PrintBarcodeModal: React.FC<Props> = ({
    matches,
    setOpen,
    open,
}: Props) => {
    const [currentSelectedBarcodeOption, setCurrentSelectedBarcodeOption] =
        React.useState('MPA1')

    const [currentSelectedPrintMethod, setCurrentSelectedPrintMethod] =
        React.useState('Automatically')
    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentSelectedBarcodeOption(
            (event.target as HTMLInputElement).value
        )
    }

    const handlePrintMethodChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCurrentSelectedPrintMethod((event.target as HTMLInputElement).value)
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.printBarcodeModal }}
            >
                <DialogTitle className={styles.printBarcodeTitleColor}>
                    <p className={styles.printBarcodeModalTitle}>
                        Barcode Printing
                    </p>
                </DialogTitle>
                <IconButton
                    onClick={() => setOpen(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent sx={{ padding: '20px 35px' }}>
                    <Grid container spacing={1}>
                        <Grid item md={6} xs={12}>
                            <div>
                                <p className={styles.printBarcodeOptionTitle}>
                                    Use Barcode Format in
                                </p>
                                <FormControl>
                                    <RadioGroup
                                        defaultValue="MPA1"
                                        name="barcodeFormat"
                                        value={currentSelectedBarcodeOption}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel
                                            value="MPA1"
                                            control={<Radio />}
                                            label="MPA[Ex Date + Seq ID + M]"
                                            classes={{
                                                label:
                                                    currentSelectedBarcodeOption ===
                                                    'MPA1'
                                                        ? styles.checkBoxSelected
                                                        : styles.checkBoxUnselected,
                                            }}
                                        />
                                        <FormControlLabel
                                            value="MPA2"
                                            control={<Radio />}
                                            label="MPA[E x Date + Seq ID + H] for HbA1c"
                                            classes={{
                                                label:
                                                    currentSelectedBarcodeOption ===
                                                    'MPA2'
                                                        ? styles.checkBoxSelected
                                                        : styles.checkBoxUnselected,
                                            }}
                                        />
                                        <FormControlLabel
                                            value="CBC"
                                            control={<Radio />}
                                            label="CBC[E x Date + Seq ID + C]"
                                            classes={{
                                                label:
                                                    currentSelectedBarcodeOption ===
                                                    'CBC'
                                                        ? styles.checkBoxSelected
                                                        : styles.checkBoxUnselected,
                                            }}
                                        />
                                        <FormControlLabel
                                            value="ExDate"
                                            control={<Radio />}
                                            label="E x Date[8 digits] + Seq ID[3 digits]"
                                            classes={{
                                                label:
                                                    currentSelectedBarcodeOption ===
                                                    'ExDate'
                                                        ? styles.checkBoxSelected
                                                        : styles.checkBoxUnselected,
                                            }}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div style={{ marginTop: '1rem' }}>
                                <p className={styles.printBarcodeOptionTitle}>
                                    Print Method
                                </p>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        defaultValue="Automatically"
                                        name="printMethod"
                                        value={currentSelectedPrintMethod}
                                        onChange={handlePrintMethodChange}
                                    >
                                        <FormControlLabel
                                            value="Automatically"
                                            control={<Radio />}
                                            label="Automatically"
                                            classes={{
                                                label:
                                                    currentSelectedPrintMethod ===
                                                    'Automatically'
                                                        ? styles.checkBoxSelected
                                                        : styles.checkBoxUnselected,
                                            }}
                                        />
                                        <FormControlLabel
                                            value="Manually"
                                            control={<Radio />}
                                            label="Manually"
                                            classes={{
                                                label:
                                                    currentSelectedPrintMethod ===
                                                    'Manually'
                                                        ? styles.checkBoxSelected
                                                        : styles.checkBoxUnselected,
                                            }}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <div>
                                <p className={styles.printBarcodeOptionTitle}>
                                    Use Barcode Format in
                                </p>
                                <Grid container sx={{ marginTop: '1rem' }}>
                                    <Grid item md={6} xs={12}>
                                        <p className={styles.dateTitle}>From</p>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DatePicker
                                                slots={{
                                                    textField: (params) => (
                                                        <TextField
                                                            variant="outlined"
                                                            {...params}
                                                            size="small"
                                                            className={
                                                                styles.printBarcodeDateInput
                                                            }
                                                            InputProps={{
                                                                classes: {
                                                                    input: styles.inputField,
                                                                },
                                                            }}
                                                            margin="dense"
                                                        />
                                                    ),
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <p className={styles.dateTitle}>To</p>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DatePicker
                                                slots={{
                                                    textField: (params) => (
                                                        <TextField
                                                            variant="outlined"
                                                            {...params}
                                                            size="small"
                                                            className={
                                                                styles.printBarcodeDateInput
                                                            }
                                                            InputProps={{
                                                                classes: {
                                                                    input: styles.inputField,
                                                                },
                                                            }}
                                                            margin="dense"
                                                        />
                                                    ),
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ marginTop: '3rem' }}>
                                <p className={styles.printBarcodeOptionTitle}>
                                    Range of Seq No
                                </p>
                                <Grid container sx={{ marginTop: '1rem' }}>
                                    <Grid item md={6} xs={12}>
                                        <p className={styles.dateTitle}>From</p>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            placeholder=""
                                            className={
                                                styles.printBarcodeDateInput
                                            }
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <p className={styles.dateTitle}>To</p>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            placeholder=""
                                            className={
                                                styles.printBarcodeDateInput
                                            }
                                            InputProps={{
                                                classes: {
                                                    input: styles.inputField,
                                                },
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions className={styles.printBarcodeActions}>
                    <Button
                        variant="contained"
                        className={styles.printBttn}
                        onClick={() => setOpen(false)}
                    >
                        Print
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
export default PrintBarcodeModal
