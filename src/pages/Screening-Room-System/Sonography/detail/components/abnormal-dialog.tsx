import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CodeContentTable from 'components/CodeContentTable'
import React, { Dispatch, SetStateAction } from 'react'
import styles from './_abnormal-dialog.module.scss'
import AbnormalDialogProstateSizeInput from './abnormal-dialog-prostate-size-input'
import AbnormalDialogQuantityRow from './abnormal-dialog-quantity-row'

type Props = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const positionOptions = [
    {
        id: 1,
        label: 'None',
    },
    {
        id: 2,
        label: 'No',
    },
    {
        id: 3,
        label: 'Left Side',
    },
    {
        id: 4,
        label: 'Right Side',
    },
    {
        id: 5,
        label: 'Both Side',
    },
    {
        id: 6,
        label: 'Middle Side',
    },
]

const biradOptions = [
    {
        label: '1',
    },
    {
        label: '2',
    },
    {
        label: '3',
    },
    {
        label: '4a',
    },
    {
        label: '4b',
    },
    {
        label: '4c',
    },
    {
        label: '5',
    },
    {
        label: '6',
    },
]

const tiradOptions = [
    {
        label: '1',
    },
    {
        label: '2',
    },
    {
        label: '3',
    },
    {
        label: '4',
    },
    {
        label: '5',
    },
    {
        label: '6',
    },
    {
        label: '>=7',
    },
]

const AbnormalDialog = ({ open, setOpen }: Props) => {
    return (
        <React.Fragment>
            <Dialog open={open} keepMounted maxWidth={'lg'} fullWidth>
                <DialogContent className={styles.modalDialogContent} dividers>
                    <CodeContentTable searchBar />

                    <Box my={1}>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Suspicious"
                        />
                    </Box>

                    <Typography className={styles.title} my={1}>
                        Location
                    </Typography>
                    <Box className={styles.container}>
                        <Grid container>
                            <Grid xs={12} sm={3}>
                                <FormControl>
                                    <FormLabel
                                        id="rd-positon"
                                        className={styles.inputLabel}
                                    >
                                        Indicates the position
                                    </FormLabel>
                                    <RadioGroup
                                        aria-labelledby="rd-positon"
                                        defaultValue="1"
                                        name="position"
                                        defaultChecked
                                    >
                                        {positionOptions.map(
                                            (option, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    value={option.id}
                                                    control={<Radio />}
                                                    label={option.label}
                                                />
                                            )
                                        )}
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} sm={6}>
                                <Box mb={2}>
                                    <FormControl>
                                        <FormLabel
                                            className={styles.inputLabel}
                                        >
                                            Face of a clock
                                        </FormLabel>

                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            alignItems="center"
                                        >
                                            <TextField
                                                className={styles.inputSm}
                                                defaultValue={'-'}
                                            />
                                            <span>o&apos;clock,</span>
                                            <TextField
                                                className={styles.inputSm}
                                                defaultValue={'-'}
                                            />
                                            <span>cm away from nipple;</span>
                                        </Stack>
                                    </FormControl>
                                </Box>

                                <Box mb={2}>
                                    <FormControl>
                                        <FormLabel
                                            id="rd-birads"
                                            className={styles.inputLabel}
                                        >
                                            Birads
                                        </FormLabel>

                                        <RadioGroup
                                            aria-labelledby="rd-birads"
                                            defaultValue="1"
                                            name="position"
                                            defaultChecked
                                        >
                                            <Grid container>
                                                {biradOptions.map(
                                                    (option, index) => (
                                                        <Grid
                                                            key={index}
                                                            xs={4}
                                                            sm={3}
                                                        >
                                                            <FormControlLabel
                                                                key={index}
                                                                value={
                                                                    option.label
                                                                }
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label={
                                                                    option.label
                                                                }
                                                            />
                                                        </Grid>
                                                    )
                                                )}
                                            </Grid>
                                        </RadioGroup>
                                    </FormControl>
                                </Box>

                                <Box mb={2}>
                                    <FormControl>
                                        <FormLabel
                                            id="rd-tirads"
                                            className={styles.inputLabel}
                                        >
                                            Tirads
                                        </FormLabel>

                                        <RadioGroup
                                            aria-labelledby="rd-tirads"
                                            defaultValue="1"
                                            name="position"
                                            defaultChecked
                                        >
                                            <Grid container>
                                                {tiradOptions.map(
                                                    (option, index) => (
                                                        <Grid
                                                            key={index}
                                                            xs={4}
                                                            sm={3}
                                                        >
                                                            <FormControlLabel
                                                                key={index}
                                                                value={
                                                                    option.label
                                                                }
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label={
                                                                    option.label
                                                                }
                                                            />
                                                        </Grid>
                                                    )
                                                )}
                                            </Grid>
                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Quantity input */}
                    <Box className={styles.container} mb={2}>
                        <Typography className={styles.inputLabel}>
                            One Side Quantity
                        </Typography>
                        <AbnormalDialogQuantityRow quantityLabel="Size" />

                        <Typography className={styles.inputLabel}>
                            Both Quantity
                        </Typography>
                        <AbnormalDialogQuantityRow quantityLabel={`Left`} />
                        <AbnormalDialogQuantityRow quantityLabel="Right" />
                    </Box>

                    {/* Prostate size  */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Box className={styles.container} mb={2}>
                                <Typography className={styles.inputLabel}>
                                    Prostate Size
                                </Typography>
                                <AbnormalDialogProstateSizeInput />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box className={styles.container} mb={2}>
                                <Typography
                                    className={styles.inputLabel}
                                    sx={{ mb: 'calc(1rem + 10px) !important' }}
                                >
                                    Other
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                >
                                    <span>Data</span>
                                    <TextField
                                        className={styles.inputSm}
                                        defaultValue={'-'}
                                    />
                                    <span>Unit</span>
                                    <TextField
                                        className={styles.inputSm}
                                        defaultValue={'-'}
                                    />
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={2}
                        mb={2}
                    >
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                className={styles.addBttn}
                                onClick={() => setOpen(false)}
                            >
                                Add
                            </Button>
                            <Button
                                variant="contained"
                                className={styles.deleteBttn}
                                onClick={() => setOpen(false)}
                            >
                                Delete
                            </Button>
                        </Stack>

                        <Button
                            variant="contained"
                            className={styles.okBttn}
                            onClick={() => setOpen(false)}
                        >
                            OK
                        </Button>
                    </Stack>

                    <CodeContentTable />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default AbnormalDialog
