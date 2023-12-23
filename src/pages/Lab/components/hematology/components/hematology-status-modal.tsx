import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import styles from '../_hematology.module.scss'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { Grid } from '@mui/material'
import HematologyStatusComponent from './hematology-status-component'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

type HematologyStatusModalProps = {
    open: boolean
    setOpen: any
    fakeData: any
}
const HematologyStatusModal: React.FC<HematologyStatusModalProps> = ({
    open,
    setOpen,
    fakeData,
}: HematologyStatusModalProps) => {
    return (
        <Dialog
            open={open}
            classes={{ paper: styles.hematologyStatusModalRadius }}
            maxWidth="md"
        >
            <DialogTitle
                sx={{ m: 0, p: 2 }}
                className={styles.hematologyStatusModalTitleBackground}
            >
                <div className={styles.hematologyStatusModalTitleDiv}>
                    <p className={styles.hematologyStatusModalTitle}>
                        Attempt: {fakeData?.result}
                    </p>
                </div>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={() => setOpen(false)}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 20,
                    color: '#FFFFFF',
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent
                dividers
                className={styles.hematologyStatusModalTitleDiv}
            >
                <div>
                    <Grid container spacing={1}>
                        <Grid item md={7} xs={12}>
                            <Grid container spacing={1}>
                                <Grid
                                    item
                                    md={4}
                                    xs={4}
                                    style={{
                                        margin: 'auto',
                                    }}
                                >
                                    <p className={styles.hematologyResultTitle}>
                                        Blood:
                                    </p>
                                </Grid>
                                <Grid item md={4} xs={4}>
                                    <HematologyStatusComponent
                                        status={fakeData?.blood_taken}
                                        text={fakeData?.blood_taken_text}
                                    />
                                </Grid>
                                <Grid item md={4} xs={4}>
                                    <HematologyStatusComponent
                                        status={2}
                                        text="Taken"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid
                                    item
                                    md={4}
                                    xs={4}
                                    style={{
                                        margin: 'auto',
                                    }}
                                >
                                    <p className={styles.hematologyResultTitle}>
                                        Punctured Site:
                                    </p>
                                </Grid>
                                <Grid item md={4} xs={4}>
                                    <HematologyStatusComponent
                                        status={2}
                                        text="RT"
                                    />
                                </Grid>
                                <Grid item md={4} xs={4}>
                                    <HematologyStatusComponent
                                        status={2}
                                        text="LT"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item md={4} xs={4}></Grid>
                                <Grid item md={4} xs={4}>
                                    <HematologyStatusComponent
                                        status={1}
                                        text="RH"
                                    />
                                </Grid>
                                <Grid item md={4} xs={4}>
                                    <HematologyStatusComponent
                                        status={2}
                                        text="LH"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <Grid container>
                                <Grid
                                    item
                                    md={9}
                                    xs={9}
                                    style={{
                                        margin: 'auto',
                                    }}
                                >
                                    <p className={styles.hematologyResultTitle}>
                                        Facilitated By:
                                    </p>
                                </Grid>
                                <Grid item md={3} xs={3}>
                                    <Button
                                        disabled
                                        style={{ color: 'transparent' }}
                                    >
                                        -
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <div style={{ marginTop: '10px' }}>
                                        <TextField
                                            size="small"
                                            fullWidth
                                            placeholder="Staff ID..."
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                            <div style={{ marginTop: '10px' }}>
                                <p
                                    className={
                                        styles.hematologyStatusModalBottomText
                                    }
                                >
                                    Update: 11:11 22-09-2022
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default HematologyStatusModal
