import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import Stack from '@mui/material/Stack'
import { TransitionProps } from '@mui/material/transitions'
import CodeContentTable from 'components/CodeContentTable'
import React, { Dispatch, SetStateAction } from 'react'
import styles from '../_physician-consultation-info.module.scss'
import ownStyles from './_physical-exam-outcome-comment-modal.module.scss'
import QuantityRow from './components/quantity-row'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

const mockSystemData = [
    { id: 1, label: 'Digestive System' },
    { id: 2, label: 'Respiratory System' },
    { id: 3, label: 'Circulatory System' },
    { id: 4, label: 'Skeletal, joint and connective tissue' },
    { id: 5, label: 'Skin, Hair and Na' },
    { id: 6, label: 'Breast' },
    { id: 7, label: 'Female Genitalia' },
    { id: 8, label: 'Male Genitalia' },
    { id: 9, label: 'Urinary System' },
    { id: 10, label: 'Nervous System' },
    { id: 11, label: 'Endocrine System' },
    { id: 12, label: 'Immune System' },
    { id: 13, label: 'Lymphatic System' },
    { id: 14, label: 'Head' },
    { id: 15, label: 'Eye' },
    { id: 16, label: 'Others' },
]

const mockLocationData = [
    { id: 1, label: 'None' },
    { id: 2, label: 'Left Side' },
    { id: 3, label: 'Right Side' },
    { id: 4, label: 'Both' },
]

type Props = {
    matches: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    open: boolean
}

const PhysicalExamOutcomeCommentModal: React.FC<Props> = ({
    matches,
    setOpen,
    open,
}: Props) => {
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.infoModal }}
                maxWidth="xl"
                fullWidth
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>
                        Comment For Physical Exam Outcome
                    </p>
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
                <DialogContent
                    className={styles.infoModalDialogContent}
                    sx={{ maxHeight: 'inherit' }}
                >
                    <p className={styles.infoModalDialogContentTitle}>
                        Choose System
                    </p>

                    <Grid
                        container
                        rowSpacing={2}
                        sx={{
                            mt: '1rem',
                        }}
                    >
                        {mockSystemData.map((data, index) => (
                            <Grid item key={index} xs={6} sm={4} md={3}>
                                <FormControlLabel
                                    className={styles.infoModalCheckboxLabel}
                                    control={
                                        <Checkbox
                                            className={
                                                styles.infoModalSystemCheckbox
                                            }
                                        />
                                    }
                                    label={data.label}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <Grid sx={{ my: '2rem' }}>
                        <CodeContentTable />
                    </Grid>

                    <p className={styles.infoModalDialogContentTitle}>
                        Location
                    </p>

                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{
                            mt: '1rem',
                            mb: '2rem',
                        }}
                    >
                        {mockLocationData.map((data, index) => (
                            <FormControlLabel
                                key={index}
                                className={styles.infoModalCheckboxLabel}
                                control={
                                    <Checkbox
                                        className={
                                            styles.infoModalLocationCheckbox
                                        }
                                    />
                                }
                                label={data.label}
                            />
                        ))}
                    </Stack>

                    <p className={styles.infoModalDialogContentTitle}>
                        One Side
                    </p>
                    <Box sx={{ mt: '1rem', mb: '2rem' }}>
                        <QuantityRow quantityLabel="Quantity" labelSize={1} />
                    </Box>

                    <p className={styles.infoModalDialogContentTitle}>
                        Both Side
                    </p>
                    <Box sx={{ mt: '1rem', mb: '1rem' }}>
                        <QuantityRow
                            quantityLabel="Left Side Quantity"
                            labelSize={2}
                        />
                    </Box>
                    <Box
                        sx={{
                            mt: '1rem',
                            mb: '1rem',
                        }}
                    >
                        <QuantityRow
                            quantityLabel="Right Side Quantity"
                            labelSize={2}
                        />
                    </Box>

                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            className={ownStyles.confirmBttn}
                        >
                            Confirm
                        </Button>
                        <Button
                            variant="contained"
                            className={ownStyles.deleteBttn}
                        >
                            Delete
                        </Button>
                    </Stack>

                    <Grid sx={{ my: '2rem' }}>
                        <CodeContentTable />
                    </Grid>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default PhysicalExamOutcomeCommentModal
