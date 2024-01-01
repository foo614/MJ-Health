import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_monitor-system.module.scss'
import { DialogTitle, Grid, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    open: boolean
    setOpen: any
    matches: any
    currentItem: any
}

const ChangeStationModal: React.FC<Props> = ({
    open,
    setOpen,
    matches,
    currentItem,
}: Props) => {
    const selectOptions = [
        {
            id: 1,
            label: 'A-01 General Measurement',
        },
        {
            id: 2,
            label: 'A-02 Briefing',
        },
        {
            id: 3,
            label: 'A-03 Electrocradiogram',
        },
        {
            id: 4,
            label: 'A-04 Retinography',
        },
        {
            id: 5,
            label: 'A-05 Sonography',
        },
        {
            id: 6,
            label: 'A-06 Vision Test',
        },
        {
            id: 7,
            label: 'A-07 Vision Test',
        },
        {
            id: 8,
            label: 'A-08 Vision Test',
        },
        {
            id: 9,
            label: 'A-09 Vision Test',
        },
        {
            id: 10,
            label: 'A-10 Vision Test',
        },
    ]
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.changeStationModal }}
            >
                <DialogTitle>
                    <p className={styles.changeStationModalTitle}>
                        Change Station
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
                    <CloseIcon />
                </IconButton>
                <DialogContent sx={{ paddingTop: '10px' }}>
                    <div className={styles.changeStationModalDivider} />
                    <div style={{ marginTop: '1rem' }}>
                        <Grid
                            container
                            className={styles.changeStationModalGridContainer}
                            columnSpacing={3}
                        >
                            <Grid
                                item
                                md={4}
                                xs={12}
                                sx={{
                                    margin: 'auto',
                                    textAlign: matches ? 'end' : 'start',
                                    paddingLeft: matches ? '0 !important' : '',
                                }}
                            >
                                <p
                                    className={
                                        styles.changeStationModalTextFieldTitle
                                    }
                                >
                                    Seq No:
                                </p>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <TextField
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    value={currentItem.seqNo}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                        classes: {
                                            input: styles.textFieldPropsInput,
                                        },
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                md={4}
                                xs={12}
                                sx={{
                                    margin: 'auto',
                                    textAlign: matches ? 'end' : 'start',
                                    paddingLeft: matches ? '0 !important' : '',
                                }}
                            >
                                <p
                                    className={
                                        styles.changeStationModalTextFieldTitle
                                    }
                                >
                                    Name:
                                </p>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <TextField
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    value={currentItem.name}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                        classes: {
                                            input: styles.textFieldPropsInput,
                                        },
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                md={4}
                                xs={12}
                                sx={{
                                    margin: 'auto',
                                    textAlign: matches ? 'end' : 'start',
                                    paddingLeft: matches ? '0 !important' : '',
                                }}
                            >
                                <p
                                    className={
                                        styles.changeStationModalTextFieldTitle
                                    }
                                >
                                    Next Station:
                                </p>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <TextField
                                    size="small"
                                    margin="dense"
                                    fullWidth
                                    value={currentItem.nextStation}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                        classes: {
                                            input: styles.textFieldPropsInput,
                                        },
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                md={4}
                                xs={12}
                                sx={{
                                    margin: 'auto',
                                    textAlign: matches ? 'end' : 'start',
                                    paddingLeft: matches ? '0 !important' : '',
                                }}
                            >
                                <p
                                    className={
                                        styles.changeStationModalTextFieldTitle
                                    }
                                >
                                    New Next Station:
                                </p>
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={styles.selectFieldCss}
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        // value={age}
                                        //onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            className={styles.changeStationModalSaveBttn}
                            sx={{ width: '170px' }}
                            onClick={() => setOpen(false)}
                        >
                            SAVE
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default ChangeStationModal
